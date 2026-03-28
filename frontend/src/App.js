import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import AutomationPage from './pages/AutomationPage';
import CollectionsPage from './pages/CollectionsPage';
import AgenticAIPage from './pages/AgenticAIPage';
import APIPage from './pages/APIPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignupPage from './pages/SignupPage';
import ArticlePage from './pages/ArticlePage';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = require('react-router-dom').useLocation();
  require('react').useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/agentic-ai" element={<AgenticAIPage />} />
        <Route path="/api-infrastructure" element={<APIPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/insights/retrofit-vs-native" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
