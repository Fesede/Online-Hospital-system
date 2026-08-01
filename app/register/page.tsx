"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RegisterPage() {
  const [lang, setLang] = useState<"EN" | "AM">("EN");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "patient",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const content = {
    EN: {
      badge: "Join Us Today",
      title: "Create an Account",
      sub: "Sign up to access telehealth consultations, book doctors, and manage medical records.",
      formTitle: "Registration Form",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Abebe Bikila",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+251 911 00 00 00",
      roleLabel: "Account Type",
      rolePatient: "Patient / General User",
      roleDoctor: "Healthcare Professional / Doctor",
      passLabel: "Password",
      passPlaceholder: "••••••••",
      confirmPassLabel: "Confirm Password",
      confirmPassPlaceholder: "••••••••",
      agreeTerms: "I agree to the Terms of Service & Privacy Policy",
      submitBtn: "Create Account",
      alreadyAccount: "Already have an account?",
      loginLink: "Sign In",
      successTitle: "Account Created Successfully!",
      successMsg:
        "Welcome! Your account has been registered. You can now log in to schedule appointments.",
      goToLogin: "Go to Sign In",
    },
    AM: {
      badge: "ዛሬውኑ ይቀላቀሉን",
      title: "አዲስ መለያ ይክፈቱ",
      sub: "ለቪዲዮ ህክምና፣ ለቀጠሮዎች እና ለህክምና መዝገብዎ አዲስ አካውንት ይፍጠሩ።",
      formTitle: "የምዝገባ ቅጽ",
      nameLabel: "ሙሉ ስም",
      namePlaceholder: "ምሳሌ፡ አበበ በቀለ",
      emailLabel: "ኢሜይል አድራሻ",
      emailPlaceholder: "name@example.com",
      phoneLabel: "ስልክ ቁጥር",
      phonePlaceholder: "+251 911 00 00 00",
      roleLabel: "የመለያ ዓይነት",
      rolePatient: "ታካሚ / ተጠቃሚ",
      roleDoctor: "የህክምና ባለሙያ / ሐኪም",
      passLabel: "የይለፍ ቃል",
      passPlaceholder: "••••••••",
      confirmPassLabel: "የይለፍ ቃል ያረጋግጡ",
      confirmPassPlaceholder: "••••••••",
      agreeTerms: "በአገልግሎት ውሎች እና ግላዊነት ፖሊሲ እስማማለሁ",
      submitBtn: "መለያ ፍጠር",
      alreadyAccount: "መለያ አለዎት?",
      loginLink: "ይግቡ",
      successTitle: "መለያዎ በተሳካ ሁኔታ ተፈጥሯል!",
      successMsg: "እንኳን ደህና መጡ! ምዝገባዎ ተጠናቋል። አሁን በመግባት የህክምና ቀጠሮ መያዝ ይችላሉ።",
      goToLogin: "ወደ መግቢያ ገጽ ሂድ",
    },
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(
        lang === "EN" ? "Passwords do not match!" : "የይለፍ ቃላቱ ተመሳሳይ አይደሉም!",
      );
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* HERO HEADER */}
        <section className="bg-[#1B365D] text-white py-14 border-b border-slate-700/50">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
            <span className="bg-[#00A896]/20 text-[#00A896] border border-[#00A896]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold inline-block">
              {t.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.title}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              {t.sub}
            </p>
          </div>
        </section>

        {/* REGISTRATION FORM SECTION */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="p-8 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-center space-y-4">
                <span className="text-4xl block">🎉</span>
                <h3 className="text-lg font-bold text-emerald-900">
                  {t.successTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto">
                  {t.successMsg}
                </p>
                <Link
                  href="/login"
                  className="inline-block mt-4 bg-[#00A896] hover:bg-[#008f80] text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  {t.goToLogin}
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-bold text-[#1B365D] border-b border-slate-100 pb-3 mb-4">
                  {t.formTitle}
                </h2>

                {/* FULL NAME */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.namePlaceholder}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                  />
                </div>

                {/* EMAIL & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                    />
                  </div>
                </div>

                {/* ROLE SELECTION */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.roleLabel}
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                  >
                    <option value="patient">{t.rolePatient}</option>
                    <option value="doctor">{t.roleDoctor}</option>
                  </select>
                </div>

                {/* PASSWORDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.passLabel}
                    </label>
                    <input
                      type="password"
                      required
                      placeholder={t.passPlaceholder}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.confirmPassLabel}
                    </label>
                    <input
                      type="password"
                      required
                      placeholder={t.confirmPassPlaceholder}
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                    />
                  </div>
                </div>

                {/* TERMS CHECKBOX */}
                <div className="flex items-center space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="w-4 h-4 text-[#00A896] border-slate-300 rounded focus:ring-[#00A896]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs text-slate-600 font-medium"
                  >
                    {t.agreeTerms}
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-[#00A896] hover:bg-[#008f80] text-white font-semibold py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-sm mt-4"
                >
                  {t.submitBtn}
                </button>

                {/* SIGN IN LINK */}
                <p className="text-center text-xs text-slate-600 pt-3">
                  {t.alreadyAccount}{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-[#00A896] hover:underline"
                  >
                    {t.loginLink}
                  </Link>
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
