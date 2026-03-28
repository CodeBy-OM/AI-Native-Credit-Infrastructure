const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/vitto_sessions', {
      serverSelectionTimeoutMS: 3000,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    console.log('   OTP sessions will use in-memory fallback');
  }
};


const otpSessionSchema = new mongoose.Schema({
  identifier: { type: String, required: true, index: true }, // email or phone
  otp: { type: String, required: true },
  attempts: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now, expires: 600 }, // TTL: 600 seconds = 10 minutes
});

const OtpSession = mongoose.model('OtpSession', otpSessionSchema);


const inMemoryOtpStore = new Map();

const OtpStore = {
  async save(identifier, otp) {
    if (mongoose.connection.readyState === 1) {
      await OtpSession.deleteMany({ identifier });
      await new OtpSession({ identifier, otp }).save();
    } else {
      inMemoryOtpStore.set(identifier, {
        otp,
        attempts: 0,
        expiresAt: Date.now() + 10 * 60 * 1000,
      });
    }
  },

  async find(identifier) {
    if (mongoose.connection.readyState === 1) {
      return await OtpSession.findOne({ identifier });
    } else {
      const session = inMemoryOtpStore.get(identifier);
      if (!session) return null;
      if (Date.now() > session.expiresAt) {
        inMemoryOtpStore.delete(identifier);
        return null;
      }
      return session;
    }
  },

  async incrementAttempts(identifier) {
    if (mongoose.connection.readyState === 1) {
      await OtpSession.updateOne({ identifier }, { $inc: { attempts: 1 } });
    } else {
      const session = inMemoryOtpStore.get(identifier);
      if (session) session.attempts += 1;
    }
  },

  async delete(identifier) {
    if (mongoose.connection.readyState === 1) {
      await OtpSession.deleteMany({ identifier });
    } else {
      inMemoryOtpStore.delete(identifier);
    }
  },
};

module.exports = { connectMongo, OtpStore };
