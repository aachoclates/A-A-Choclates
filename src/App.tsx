import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CollectionsPage } from "./pages/CollectionsPage";
import { GiftingBulkPage } from "./pages/GiftingBulkPage";
import { HomePage } from "./pages/HomePage";
import { OrderPage } from "./pages/OrderPage";
import { OurStoryPage } from "./pages/OurStoryPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      window.setTimeout(() => {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex min-h-screen flex-col bg-[#FAF6F0] text-[#2A1812]">
        <Navbar />

        <main className="flex-1 pt-24 sm:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/gifting-bulk" element={<GiftingBulkPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
