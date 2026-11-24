import { lazy, Suspense, useEffect } from "react";
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
import { HomePage } from "./pages/HomePage";

const CollectionsPage = lazy(() =>
  import("./pages/CollectionsPage").then((m) => ({
    default: m.CollectionsPage,
  }))
);
const GiftingBulkPage = lazy(() =>
  import("./pages/GiftingBulkPage").then((m) => ({ default: m.GiftingBulkPage }))
);
const OrderPage = lazy(() =>
  import("./pages/OrderPage").then((m) => ({ default: m.OrderPage }))
);
const OurStoryPage = lazy(() =>
  import("./pages/OurStoryPage").then((m) => ({ default: m.OurStoryPage }))
);

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

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#DFC896] border-t-[#B58938]" />
    </div>
  );
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
            <Route
              path="/collections"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <CollectionsPage />
                </Suspense>
              }
            />
            <Route
              path="/gifting-bulk"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <GiftingBulkPage />
                </Suspense>
              }
            />
            <Route
              path="/our-story"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <OurStoryPage />
                </Suspense>
              }
            />
            <Route
              path="/order"
              element={
                <Suspense fallback={<RouteFallback />}>
                  <OrderPage />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
