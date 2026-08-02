import React, { lazy, Suspense, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollToHash, ScrollToTop } from "./components/Common.jsx";
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp';
import MyAvatar from './assets/Logo/Logo.png';
export const BASE_PATH = import.meta.env.VITE_SITE_PATH || "";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Automation = lazy(() => import("./pages/automation/HomeAutomation"));
const ITServices = lazy(() => import("./pages/services/ITServices"));
const ShowcasePage = lazy(() => import("./pages/ShowCase"));

const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white transition-opacity duration-300">
    <div className="w-10 h-10 border-4 border-stone-100 border-t-orange-600 rounded-full animate-spin [transform:translateZ(0)]"></div>
  </div>
);

function App() {
  const routes = useMemo(() => [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/automation", element: <Automation /> },
  { path: "/services", element: <ITServices /> },

  { path: "/automation/gallery", element: <ShowcasePage type="gallery" /> },
  { path: "/automation/products", element: <ShowcasePage type="products" /> },
  { path: "/services/gallery", element: <ShowcasePage type="gallery" /> },
  { path: "/services/products", element: <ShowcasePage type="products" /> },
], []);




  return (
    <div className="flex flex-col min-h-screen antialiased">
<ScrollToTop />
       <FloatingWhatsApp
        phoneNumber={WHATSAPP_NUMBER}
        accountName="Phoenix Solutions"
        avatar={MyAvatar}
        chatMessage="Hello there! 🤝 How can we help?"
        statusMessage="Typically replies within 1 hour"
        darkMode={false}
        chatboxHeight="400px"
        notification={true}
        allowClickAway={true}
      />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={element}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
export default App;