"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServicesPage() {
  type ServiceFilter = "all" | "virtual" | "field" | "ai";
  const [lang, setLang] = useState<"EN" | "AM">("EN");
  const [filter, setFilter] = useState<ServiceFilter>("all");

  const content = {
    EN: {
      badge: "End-to-End Telehealth Ecosystem",
      title: "Our Medical & Care Services",
      sub: "Comprehensive healthcare solutions connecting patients, doctors, field teams, and NGO sponsors in one unified platform.",
      filterAll: "All Services",
      filterVirtual: "Virtual Consultations",
      filterField: "Field & Home Care",
      filterAI: "AI & EHR Systems",
      bookBtn: "Book Now",
      contactBtn: "Inquire Service",
      whyTitle: "Built for Modern Healthcare Delivery",
      whySub:
        "Designed to expand clinical reach across urban centers and rural communities.",
      ctaTitle: "Ready to access quality healthcare?",
      ctaSub:
        "Schedule a virtual visit or request an NGO-sponsored field appointment today.",
      ctaBtn: "Book an Appointment",
    },
    AM: {
      badge: "አጠቃላይ የዲጂታል ህክምና ስርዓት",
      title: "የህክምና እና የእንክብካቤ አገልግሎቶቻችን",
      sub: "ታካሚዎችን፣ ሐኪሞችን፣ የሜዳ ላይ ሰራተኞችን እና የኤንጂኦ አጋሮችን የሚያገናኙ አጠቃላይ የህክምና አገልግሎቶች።",
      filterAll: "ሁሉም አገልግሎቶች",
      filterVirtual: "የቪዲዮ ህክምና",
      filterField: "የሜዳ ላይ ህክምና",
      filterAI: "የኤአይ ትንተና እና EHR",
      bookBtn: "አሁኑኑ ቀጠሮ ይያዙ",
      contactBtn: "መረጃ ይጠይቁ",
      whyTitle: "ለዘመናዊ የህክምና አገልግሎት የተሰራ",
      whySub: "በከተማ እና በገጠር አካባቢዎች የህክምና ተዳራሽነትን ለማሳደግ የተነደፈ።",
      ctaTitle: "ጥራት ያለው ህክምና ለማግኘት ዝግጁ ነዎት?",
      ctaSub: "የቪዲዮ ህክምና ቀጠሮ ይያዙ ወይም በኤንጂኦ የሚደገፍ የቤት ለቤት ህክምና ይጠይቁ።",
      ctaBtn: "ቀጠሮ ይያዙ",
    },
  };

  const t = content[lang];

  const servicesList = [
    {
      id: "virtual-consult",
      category: "virtual",
      icon: "🎥",
      title: { EN: "1-on-1 Virtual Consultations", AM: "የአንድ-ለ-አንድ ቪዲዮ ህክምና" },
      desc: {
        EN: "Secure, high-definition peer-to-peer WebRTC video calls with verified medical specialists.",
        AM: "በከፍተኛ ደህንነት በተጠበቀ የቪዲዮ ጥሪ ከባለሙያ ሐኪሞች ጋር በየትኛውም ቦታ ሆነው ይገናኙ።",
      },
      link: "/consultations",
    },
    {
      id: "ai-triage",
      category: "ai",
      icon: "🤖",
      title: { EN: "AI Symptom Triage Assessment", AM: "የኤአይ የሕመም ምልክት ትንተና" },
      desc: {
        EN: "Instant automated risk evaluation prioritizing critical cases for rapid medical attention.",
        AM: "የታካሚውን ሕመም ምልክቶች በራስ-ሰር በመተንተን የአደጋ ደረጃን የሚወስን የኤአይ ስርዓት።",
      },
      link: "/consultations",
    },
    {
      id: "field-visits",
      category: "field",
      icon: "🚑",
      title: {
        EN: "NGO Sponsored Field Visits",
        AM: "በኤንጂኦ የሚደገፍ የሜዳ ላይ ህክምና",
      },
      desc: {
        EN: "Dispatched mobile doctor and nurse visits for remote, vulnerable, or elderly patients with GPS routing.",
        AM: "ለአረጋውያን እና ሩቅ ቦታ ላሉ ታካሚዎች የሞባይል ህክምና ቡድኖችን በጂፒኤስ ማሰማራት።",
      },
      link: "/contact",
    },
    {
      id: "digital-prescriptions",
      category: "ai",
      icon: "📋",
      title: {
        EN: "E-Prescriptions & Diagnostic Notes",
        AM: "ዲጂታል የመድኃኒት ማዘዣ እና EHR",
      },
      desc: {
        EN: "Encrypted digital prescriptions sent directly to partner pharmacies alongside full medical history logs.",
        AM: "የተጻፉ መድኃኒቶችን እና የህክምና ታሪክዎን በዲጂታል መንገድ ወደ አቅራቢያዎ ፋርማሲ መላክ።",
      },
      link: "/consultations",
    },
    {
      id: "specialist-care",
      category: "virtual",
      icon: "👨‍⚕️",
      title: { EN: "Specialist Care Referrals", AM: "የስፔሻሊስት ህክምና ማስተላለፍ" },
      desc: {
        EN: "Direct access to pediatricians, gynecologists, and internal medicine doctors for targeted treatment plans.",
        AM: "ከህፃናት፣ ማህፀን እና የውስጥ ደዌ ስፔሻሊስቶች ጋር ቀጥታ ውይይት እና ምክክር።",
      },
      link: "/doctors",
    },
    {
      id: "community-clinics",
      category: "field",
      icon: "🏥",
      title: {
        EN: "Community Outreach & Screening",
        AM: "የማህበረሰብ አቀፍ ህክምና እና ምርመራ",
      },
      desc: {
        EN: "Scheduled health screening camps and mobile diagnostic units funded by sponsor organizations.",
        AM: "በደጋፊ አካላት የሚከናወኑ የማህበረሰብ አቀፍ የጤና ምርመራ እና የህክምና ካምፖች።",
      },
      link: "/contact",
    },
  ];

  const filteredServices =
    filter === "all"
      ? servicesList
      : servicesList.filter((s) => s.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Shared Header Synced with Language State */}
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

        {/* SERVICES CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* CATEGORY FILTER TABS */}
          <div className="flex justify-center items-center gap-2 mb-10 flex-wrap">
            {[
              { key: "all", label: t.filterAll },
              { key: "virtual", label: t.filterVirtual },
              { key: "field", label: t.filterField },
              { key: "ai", label: t.filterAI },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as ServiceFilter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab.key
                    ? "bg-[#00A896] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1B365D]/10 text-[#1B365D] flex items-center justify-center font-bold text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg text-[#1B365D]">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.desc[lang]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={service.link}
                    className="block text-center w-full bg-[#00A896] hover:bg-[#008f80] text-white font-semibold text-xs py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    {service.category === "field" ? t.contactBtn : t.bookBtn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-slate-100 py-16 border-t border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B365D]">
              {t.ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              {t.ctaSub}
            </p>
            <div className="pt-2">
              <Link
                href="/book"
                className="inline-block bg-[#00A896] hover:bg-[#008f80] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all shadow-md"
              >
                {t.ctaBtn}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
