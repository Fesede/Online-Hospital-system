"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  const [lang, setLang] = useState<"EN" | "AM">("EN");

  const content = {
    EN: {
      badge: "About TeleHealthCare",
      heroTitle: "Bridging Healthcare Gaps with Digital Innovation",
      heroDesc:
        "We combine encrypted WebRTC video consultations with NGO-sponsored field medical care to bring affordable, accessible healthcare to every community.",
      missionTitle: "Our Core Mission",
      missionDesc:
        "To ensure no patient is left without access to qualified medical practitioners, whether through remote video visits or direct local field dispatches.",
      visionTitle: "Our Vision",
      visionDesc:
        "To become the leading hybrid digital-and-field medical framework across East Africa, integrating AI symptom triage and emergency outreach.",
      valuesTitle: "Why Choose TeleHealthCare",
      val1Title: "Encrypted WebRTC",
      val1Desc:
        "HD, real-time video connections securing patient privacy end-to-end.",
      val2Title: "AI-Powered Triage",
      val2Desc:
        "Intelligent risk assessment prioritizing urgent emergency dispatches.",
      val3Title: "NGO Integration",
      val3Desc:
        "Direct partnership programs funding field visits for vulnerable communities.",
      stat1: "15,000+",
      stat1Label: "Consultations",
      stat2: "120+",
      stat2Label: "Doctors & Field Staff",
      stat3: "98%",
      stat3Label: "Satisfaction Rate",
      teamTitle: "Platform Leadership",
      teamSub:
        "Dedicated to driving remote health accessibility and clinical excellence.",
      ctaTitle: "Ready to start your virtual visit?",
      ctaBtn: "Book Consultation Now",
    },
    AM: {
      badge: "ስለ ቴሌሄልዝኬር",
      heroTitle: "በዲጂታል ቴክኖሎጂ የህክምና ተዳራሽነትን ማሳደግ",
      heroDesc:
        "የተመሰጠረ የቪዲዮ ህክምና እና በኤንጂኦ የሚደገፍ የሜዳ ላይ ህክምናን በማቀናጀት ተቆራጭና ጥራት ያለው የህክምና አገልግሎት ለሁሉም እናደርሳለን።",
      missionTitle: "ዋና ተልዕኳችን",
      missionDesc:
        "በቪዲዮ ወይም በቤት ለቤት የሜዳ ላይ ህክምና እያንዳንዱ ታካሚ ብቁ የህክምና ባለሙያ ማግኘት መቻሉን ማረጋገጥ።",
      visionTitle: "ራዕያችን",
      visionDesc: "በምስራቅ አፍሪካ መሪ የሆነ የዲጂታል እና የሜዳ ላይ ህክምና መድረክ መሆን።",
      valuesTitle: "ቴሌሄልዝኬርን ለምን ይመርጣሉ?",
      val1Title: "የተመሰጠረ የቪዲዮ ጥሪ",
      val1Desc: "የታካሚዎችን ሚስጥር የሚጠብቅ ከፍተኛ ጥራት ያለው የቪዲዮ ግንኙነት።",
      val2Title: "የኤአይ Symptom Triage",
      val2Desc: "አስቸኳይ ሁኔታዎችን ቅድሚያ የሚሰጥ ብልህ የስጋት ትንተና።",
      val3Title: "የኤንጂኦ ትብብር",
      val3Desc: "ለችግረኛ ወገኖች የሜዳ ላይ ህክምናን የሚደግፉ አጋርነቶች።",
      stat1: "15,000+",
      stat1Label: "የተደረጉ ህክምናዎች",
      stat2: "120+",
      stat2Label: "ሐኪሞች እና የሜዳ ሰራተኞች",
      stat3: "98%",
      stat3Label: "የተጠቃሚዎች እርካታ",
      teamTitle: "የመድረኩ መሪዎች",
      teamSub: "የህክምና ተዳራሽነትን እና ጥራትን ለማሳደግ የሚሰሩ ባለሙያዎች።",
      ctaTitle: "የቪዲዮ ህክምናዎን ለመጀመር ዝግጁ ነዎት?",
      ctaBtn: "አሁኑኑ ቀጠሮ ይያዙ",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Shared Header synced with state */}
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-[#1B365D] text-white py-16 md:py-20 border-b border-slate-700/50">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <span className="bg-[#00A896]/20 text-[#00A896] border border-[#00A896]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold inline-block">
              {t.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-[#1B365D]/10 text-[#1B365D] rounded-xl flex items-center justify-center font-bold text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-[#1B365D]">
                {t.missionTitle}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.missionDesc}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-[#00A896]/10 text-[#00A896] rounded-xl flex items-center justify-center font-bold text-2xl">
                👁️
              </div>
              <h3 className="text-xl font-bold text-[#1B365D]">
                {t.visionTitle}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.visionDesc}
              </p>
            </div>
          </div>

          {/* STATS BANNER */}
          <div className="mt-12 bg-[#1B365D] text-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border border-slate-700/50 shadow-lg">
            <div>
              <p className="text-3xl font-extrabold text-[#00A896]">
                {t.stat1}
              </p>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                {t.stat1Label}
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#00A896]">
                {t.stat2}
              </p>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                {t.stat2Label}
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#00A896]">
                {t.stat3}
              </p>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                {t.stat3Label}
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-slate-100/70 py-16 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1B365D] text-center mb-10">
              {t.valuesTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
                <span className="text-2xl">🔒</span>
                <h4 className="font-bold text-[#1B365D] text-base">
                  {t.val1Title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.val1Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
                <span className="text-2xl">🤖</span>
                <h4 className="font-bold text-[#1B365D] text-base">
                  {t.val2Title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.val2Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
                <span className="text-2xl">🤝</span>
                <h4 className="font-bold text-[#1B365D] text-base">
                  {t.val3Title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.val3Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B365D]">
            {t.ctaTitle}
          </h2>
          <div>
            <Link
              href="/consultations"
              className="inline-block bg-[#00A896] hover:bg-[#008f80] text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md text-sm"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
