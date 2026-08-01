"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = {
    EN: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Doctors", href: "/doctors" },
      { name: "Contact", href: "/contact" },
    ],
    AM: [
      { name: "ዋና ገጽ", href: "/" },
      { name: "ስለ እኛ", href: "/about" },
      { name: "አገልግሎቶች", href: "/services" },
      { name: "ሐኪሞች", href: "/doctors" },
      { name: "አግኙን", href: "/contact" },
    ],
  };

  const labels = {
    EN: {
      signIn: "Sign In",
      bookAppointment: "Book Appointment",
    },
    AM: {
      signIn: "ግለጽ / ግባ",
      bookAppointment: "ቀጠሮ ይያዙ",
    },
  };

  const currentNav = navigation[lang];
  const currentLabels = labels[lang];

  return (
    <header className="bg-[#1B365D] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="TeleHealth Care Logo"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="font-bold text-xl tracking-tight">
            TeleHealth<span className="text-[#00A896]">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {currentNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#00A896] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & Action Buttons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Language Toggle Buttons */}
          <div className="relative flex items-center bg-[#142845] border border-slate-700 rounded-lg p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLang("EN")}
              className={`px-2.5 py-1 rounded transition-all ${
                lang === "EN"
                  ? "bg-[#00A896] text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("AM")}
              className={`px-2.5 py-1 rounded transition-all ${
                lang === "AM"
                  ? "bg-[#00A896] text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              አማ
            </button>
          </div>

          {/* Sign In Link */}
          <Link
            href="/login"
            className="text-sm font-medium hover:text-[#00A896] transition-colors hidden lg:block"
          >
            {currentLabels.signIn}
          </Link>

          {/* Book Appointment CTA */}
          <Link
            href="/book"
            className="bg-[#00A896] hover:bg-[#008f80] text-white text-xs sm:text-sm font-semibold px-3.5 py-2 sm:px-4 rounded-lg transition-colors shadow-sm"
          >
            {currentLabels.bookAppointment}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#142845] border-t border-slate-700/60 px-4 pt-3 pb-4 space-y-2">
          {currentNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-[#00A896] text-sm py-2 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-700/60">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white text-sm py-2 font-medium"
            >
              {currentLabels.signIn}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
