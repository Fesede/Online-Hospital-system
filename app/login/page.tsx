"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LoginPage() {
  const [lang, setLang] = useState<"EN" | "AM">("EN");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    EN: {
      badge: "Welcome Back",
      title: "Sign In to TeleHealthCare",
      sub: "Access your virtual consultations, electronic health records, and appointment schedules.",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "••••••••",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      submitBtn: "Sign In",
      submittingBtn: "Signing In...",
      noAccount: "Don't have an account?",
      signUpLink: "Create an Account",
      orContinueWith: "Or continue with",
    },
    AM: {
      badge: "እንኳን ደህና መጡ",
      title: "ወደ ቴሌሄልዝኬር ይግቡ",
      sub: "የቪዲዮ ህክምናዎን፣ የህክምና ታሪክዎን እና የቀጠሮ መርሃግብሮችን ይመልከቱ።",
      emailLabel: "ኢሜይል አድራሻ",
      emailPlaceholder: "name@example.com",
      passwordLabel: "የይለፍ ቃል",
      passwordPlaceholder: "••••••••",
      rememberMe: "አስታውሰኝ",
      forgotPassword: "የይለፍ ቃል ረስተዋል?",
      submitBtn: "ግለጽ / ግባ",
      submittingBtn: "እየገባ ነው...",
      noAccount: "መለያ የለዎትም?",
      signUpLink: "አዲስ መለያ ይክፈቱ",
      orContinueWith: "ወይም በነዚህ ይግቡ",
    },
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate auth action
    setTimeout(() => {
      setIsSubmitting(false);
      alert(lang === "EN" ? "Signed in successfully!" : "በተሳካ ሁኔታ ገብተዋል!");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Shared Header Synced with Language State */}
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
          {/* HEADER HEADING */}
          <div className="text-center space-y-2">
            <span className="bg-[#00A896]/10 text-[#00A896] border border-[#00A896]/30 px-3 py-1 rounded-full text-[11px] font-semibold inline-block">
              {t.badge}
            </span>
            <h1 className="text-2xl font-extrabold text-[#1B365D] tracking-tight">
              {t.title}
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed">{t.sub}</p>
          </div>

          {/* SIGN IN FORM */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* EMAIL FIELD */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.emailLabel}
              </label>
              <input
                type="email"
                required
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
              />
            </div>

            {/* PASSWORD FIELD */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.passwordLabel}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder={t.passwordPlaceholder}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
                >
                  {showPassword ? "👁️‍🗨️" : "👁️"}
                </button>
              </div>
            </div>

            {/* REMEMBER ME & FORGOT PASSWORD */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                  className="rounded border-slate-300 text-[#00A896] focus:ring-[#00A896]"
                />
                <span>{t.rememberMe}</span>
              </label>

              <Link
                href="/forgot-password"
                className="font-semibold text-[#00A896] hover:underline"
              >
                {t.forgotPassword}
              </Link>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00A896] hover:bg-[#008f80] text-white font-semibold py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-sm disabled:opacity-50 mt-2"
            >
              {isSubmitting ? t.submittingBtn : t.submitBtn}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-[11px] uppercase">
              <span className="bg-white px-2 text-slate-400">
                {t.orContinueWith}
              </span>
            </div>
          </div>

          {/* FOOTER LINK */}
          <p className="text-center text-xs text-slate-600 pt-2">
            {t.noAccount}{" "}
            <Link
              href="/register"
              className="font-semibold text-[#00A896] hover:underline"
            >
              {t.signUpLink}
            </Link>
          </p>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
