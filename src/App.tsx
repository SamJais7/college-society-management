import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Societies } from './pages/Societies';
import { Events } from './pages/Events';
import { AI } from './pages/AI';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/societies" element={<Layout><Societies /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/ai" element={<Layout><AI /></Layout>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
