import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Gifting & Bulk", to: "/gifting-bulk" },
  { label: "Our Story", to: "/our-story" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-[1280px] -translate-x-1/2 sm:top-4 sm:w-[calc(100%-40px)]"
    >
      <div className="flex h-[68px] items-center justify-between gap-4 rounded-full border border-[#B58938]/25 bg-[#FAF6F0]/92 px-4 shadow-[0_8px_30px_rgba(42,24,18,0.08)] backdrop-blur-md sm:h-[74px] sm:px-7">
        {/* Brand Zone: Logo + A&A Choclates */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] rounded-full"
        >
          <BrandLogo className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="brand-font text-lg font-semibold tracking-wider text-[#2A1812] whitespace-nowrap sm:text-xl">
            A&amp;A <span className="font-normal text-[#8B3A42]">Choclates</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative py-1.5 text-xs font-medium tracking-[2px] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#8B3A42] after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] ${
                  isActive
                    ? "text-[#8B3A42] after:w-full"
                    : "text-[#2A1812]/85 hover:text-[#8B3A42] after:w-0 hover:after:w-full"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Primary CTA + Mobile Trigger */}
        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            to="/order"
            className="btn-gold hidden sm:inline-flex px-5 py-2.5 text-[11px] whitespace-nowrap"
          >
            Order / Bulk Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#B58938]/30 bg-[#F2EAE0] text-[#2A1812] lg:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="mt-2.5 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-[#B58938]/30 bg-[#FAF6F0]/98 p-4 shadow-[0_18px_40px_rgba(42,24,18,0.14)] backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center rounded-2xl px-4 text-xs font-medium tracking-[2px] uppercase transition-colors ${
                    isActive
                      ? "bg-[#F2EAE0] text-[#8B3A42] font-semibold"
                      : "text-[#2A1812] hover:bg-[#F2EAE0]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/order"
              className="btn-gold mt-2 flex min-h-[44px] w-full justify-center px-5 py-3 text-xs"
            >
              Order / Bulk Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
