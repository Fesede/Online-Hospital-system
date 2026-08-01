"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"EN" | "AM">("EN");

  const content = {
    EN: {
      badge: "Next-Gen Telehealth & Field Care Platform",
      heroTitle: "Virtual Consultations & Direct Field Medical Care.",
      heroDesc:
        "Connect with licensed medical professionals via secure WebRTC video calls, receive instant AI symptom triage, or request NGO-sponsored in-person home/field doctor visits.",
      btnBook: "Book Virtual Consultation",
      btnField: "Request Field Visit",
      hipaa: "HIPAA Compliant",
      webrtc: "Encrypted WebRTC Video",
      aiTriageBadge: "Instant AI Triage",
      queueTitle: "Live Patient Queue",
      queueSub: "Smart AI Risk Allocation",
      activeDispatch: "Active Dispatch",
      symptomLabel: "Symptom Assessment",
      symptomDesc: "Acute fever & localized abdominal discomfort",
      modRisk: "MODERATE RISK",
      ngoFieldLabel: "NGO Sponsored Field Visit",
      ngoFieldDesc: "Dispatched doctor assigned to Zone 4",
      dispatched: "DISPATCHED",
      doctorConsoleLink: "Access Doctor Console →",
      featuresTitle: "Integrated Healthcare Services",
      featuresSub:
        "A single unified ecosystem built for patients, doctors, field workers, and NGO sponsors.",
      feat1Title: "Virtual Video Visits",
      feat1Desc:
        "Connect peer-to-peer with medical professionals using high-definition, WebRTC encrypted video consultations.",
      feat2Title: "AI Symptom Triage",
      feat2Desc:
        "Automated preliminary symptom analysis that categorizes patient risk levels before appointments begin.",
      feat3Title: "NGO Field Visits",
      feat3Desc:
        "Sponsor organizations can book mobile medical teams directly to patient home locations with GPS routing.",
      feat4Title: "E-Prescriptions & EHR",
      feat4Desc:
        "Seamless digital prescriptions, diagnostic notes, and full patient medical history logs stored securely.",
      portalsTitle: "Access Platform Dashboards",
      portalsSub: "Select your portal to log into your tailored workspace",
      p1Title: "Patient Portal →",
      p1Desc: "Book calls, view records & chat with AI",
      p2Title: "Doctor Console →",
      p2Desc: "Conduct video calls & dispatch field visits",
      p3Title: "NGO Dashboard →",
      p3Desc: "Manage budget balances & beneficiaries",
      p4Title: "Admin Panel →",
      p4Desc: "Audit logs, user access & system metrics",
    },
    AM: {
      badge: "የላቀ የዲጂታል ህክምና እና የሜዳ ላይ እንክብካቤ መድረክ",
      heroTitle: "የቪዲዮ ህክምና ምስክርነት እና ቀጥታ የሜዳ ላይ እንክብካቤ።",
      heroDesc:
        "በደህንነቱ በተጠበቀ የቪዲዮ ጥሪ ከተፈቀደላቸው የሕክምና ባለሙያዎች ጋር ይገናኙ፣ ፈጣን የኤአይ (AI) ምልክት ትንተና ያግኙ ወይም በኤንጂኦ የሚደገፍ የቤት ለቤት ህክምና ይጠይቁ።",
      btnBook: "የቪዲዮ ህክምና ቀጠሮ ይያዙ",
      btnField: "የሜዳ ላይ ህክምና ይጠይቁ",
      hipaa: "ህጋዊ የውሂብ ደህንነት የተጠበቀ",
      webrtc: "የተመሰጠረ የቪዲዮ ጥሪ",
      aiTriageBadge: "ፈጣን የኤአይ ስጋት ትንተና",
      queueTitle: "የታካሚዎች የጥበቃ መስመር",
      queueSub: "በኤአይ የተደገፈ የስጋት ደረጃ ምደባ",
      activeDispatch: "ተግባራዊ ስርጭት",
      symptomLabel: "የሕመም ምልክት ግምገማ",
      symptomDesc: "ከፍተኛ ትኩሳት እና የሆድ ህመም ምልክቶች",
      modRisk: "መጠነኛ ስጋት",
      ngoFieldLabel: "በኤንጂኦ የሚደገፍ የሜዳ ላይ ጉብኝት",
      ngoFieldDesc: "ሐኪም ወደ ዞን 4 ተመድቧል",
      dispatched: "ተልኳል",
      doctorConsoleLink: "ወደ ሐኪሞች መቆጣጠሪያ ይግቡ →",
      featuresTitle: "የተቀናጁ የህክምና አገልግሎቶች",
      featuresSub:
        "ለታካሚዎች፣ ለሐኪሞች፣ ለሜዳ ላይ ሰራተኞች እና ለኤንጂኦ ስፖንሰሮች የተዘጋጀ አጠቃላይ ስርዓት።",
      feat1Title: "የቪዲዮ ህክምና",
      feat1Desc: "ከፍተኛ ጥራት እና የደህንነት ጥበቃ ባለው የቪዲዮ ጥሪ ከሀኪሞች ጋር በቀጥታ ይገናኙ።",
      feat2Title: "የኤአይ Symptom Triage",
      feat2Desc: "ቀጠሮ ከመጀመሩ በፊት የታካሚውን የስጋት ደረጃ በራስ-ሰር የሚተነትን የኤአይ ስርዓት።",
      feat3Title: "የኤንጂኦ ሜዳ ላይ ህክምና",
      feat3Desc:
        "ስፖንሰር ድርጅቶች የሞባይል ህክምና ቡድኖችን በቀጥታ ወደ ታካሚዎች ቤት በጂፒኤስ ማሰማራት ይችላሉ።",
      feat4Title: "ዲጂታል ማዘዣ እና EHR",
      feat4Desc:
        "ዲጂታል የመድኃኒት ማዘዣዎች፣ የምርመራ ማስታወሻዎች እና ሙሉ የታካሚ ህክምና ታሪክ በደህንነት ይያዛሉ።",
      portalsTitle: "የስርዓቱ መግቢያ መድረኮች",
      portalsSub: "የተዘጋጀልዎትን የስራ ቦታ ለመጠቀም መግቢያዎን ይምረጡ",
      p1Title: "የታካሚዎች መግቢያ →",
      p1Desc: "ቀጠሮ ይያዙ፣ የህክምና ታሪክዎን ይመልከቱ",
      p2Title: "የሐኪሞች መቆጣጠሪያ →",
      p2Desc: "የቪዲዮ ጥሪዎችን ያድርጉ እና የሜዳ ህክምናዎችን ይመሩ",
      p3Title: "የኤንጂኦ ዳሽቦርድ →",
      p3Desc: "የበጀት ሁኔታን እና ተጠቃሚዎችን ያስዳድሩ",
      p4Title: "የአስተዳዳሪ ፓነል →",
      p4Desc: "የስርዓቱን ደህንነት እና የተጠቃሚዎችን መረጃ ይቆጣጠሩ",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Header synced with Language State */}
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-[#1B365D] text-white py-16 md:py-24 border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Hero Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#00A896]/15 text-[#00A896] border border-[#00A896]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse"></span>
                  {t.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  {t.heroTitle}
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  {t.heroDesc}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/consultations"
                    className="bg-[#00A896] hover:bg-[#008f80] text-white font-semibold px-6 py-3.5 rounded-xl text-center transition-all shadow-lg hover:shadow-teal-500/20"
                  >
                    {t.btnBook}
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3.5 rounded-xl text-center border border-white/20 transition-all"
                  >
                    {t.btnField}
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#00A896]">✓</span> {t.hipaa}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#00A896]">✓</span> {t.webrtc}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#00A896]">✓</span> {t.aiTriageBadge}
                  </span>
                </div>
              </div>

              {/* Right Column - Hero Live Card */}
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl text-slate-100 space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <div>
                        <p className="font-bold text-sm text-white">
                          {t.queueTitle}
                        </p>
                        <p className="text-xs text-slate-400">{t.queueSub}</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-medium">
                      {t.activeDispatch}
                    </span>
                  </div>

                  {/* Status Blocks */}
                  <div className="space-y-3">
                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {t.symptomLabel}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {t.symptomDesc}
                        </p>
                      </div>
                      <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30">
                        {t.modRisk}
                      </span>
                    </div>

                    <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {t.ngoFieldLabel}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {t.ngoFieldDesc}
                        </p>
                      </div>
                      <span className="bg-[#00A896]/20 text-[#00A896] text-[10px] font-bold px-2 py-0.5 rounded border border-[#00A896]/30">
                        {t.dispatched}
                      </span>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <Link
                      href="/doctors"
                      className="text-xs text-[#00A896] hover:underline font-medium"
                    >
                      {t.doctorConsoleLink}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
              {t.featuresTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.featuresSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/consultations"
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B365D]/10 text-[#1B365D] flex items-center justify-center font-bold text-xl group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                🎥
              </div>
              <h3 className="font-bold text-lg text-[#1B365D]">
                {t.feat1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.feat1Desc}
              </p>
            </Link>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-xl">
                🤖
              </div>
              <h3 className="font-bold text-lg text-[#1B365D]">
                {t.feat2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.feat2Desc}
              </p>
            </div>

            <Link
              href="/about"
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B365D]/10 text-[#1B365D] flex items-center justify-center font-bold text-xl group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                🏥
              </div>
              <h3 className="font-bold text-lg text-[#1B365D]">
                {t.feat3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.feat3Desc}
              </p>
            </Link>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-xl">
                📋
              </div>
              <h3 className="font-bold text-lg text-[#1B365D]">
                {t.feat4Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.feat4Desc}
              </p>
            </div>
          </div>
        </section>

        {/* ROLE PORTALS SECTION */}
        <section className="bg-slate-100 py-16 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl font-bold text-[#1B365D]">
                {t.portalsTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {t.portalsSub}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/consultations"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-[#00A896] transition-all group"
              >
                <p className="font-bold text-[#1B365D] group-hover:text-[#00A896] text-sm">
                  {t.p1Title}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">{t.p1Desc}</p>
              </Link>

              <Link
                href="/doctors"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-[#00A896] transition-all group"
              >
                <p className="font-bold text-[#1B365D] group-hover:text-[#00A896] text-sm">
                  {t.p2Title}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">{t.p2Desc}</p>
              </Link>

              <Link
                href="/about"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-[#00A896] transition-all group"
              >
                <p className="font-bold text-[#1B365D] group-hover:text-[#00A896] text-sm">
                  {t.p3Title}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">{t.p3Desc}</p>
              </Link>

              <Link
                href="/contact"
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-[#00A896] transition-all group"
              >
                <p className="font-bold text-[#1B365D] group-hover:text-[#00A896] text-sm">
                  {t.p4Title}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">{t.p4Desc}</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
