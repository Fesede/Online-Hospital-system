"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Doctor Mock Data
const doctorsList = [
  {
    id: 1,
    name: "Dr. Abebe Bikila",
    specialty: { EN: "General Practitioner", AM: "ጠቅላላ ሐኪም" },
    experience: "8 Yrs Exp",
    avatar: "👨‍⚕️",
    status: { EN: "Available Today", AM: "ዛሬ ይገኛሉ" },
    available: true,
    rating: "4.9",
  },
  {
    id: 2,
    name: "Dr. Beth-El Demissie",
    specialty: { EN: "Pediatrician", AM: "የሕፃናት ሕክምና ባለሙያ" },
    experience: "12 Yrs Exp",
    avatar: "👩‍⚕️",
    status: { EN: "Available Tomorrow", AM: "ነገ ይገኛሉ" },
    available: false,
    rating: "4.8",
  },
  {
    id: 3,
    name: "Dr. Samuel Tadesse",
    specialty: { EN: "Internal Medicine", AM: "የውስጥ ደዌ ሐኪም" },
    experience: "10 Yrs Exp",
    avatar: "👨‍⚕️",
    status: { EN: "Available Today", AM: "ዛሬ ይገኛሉ" },
    available: true,
    rating: "5.0",
  },
  {
    id: 4,
    name: "Dr. Tigist Haile",
    specialty: { EN: "Gynecologist", AM: "የማህፀን እና ፅንስ ሐኪም" },
    experience: "14 Yrs Exp",
    avatar: "👩‍⚕️",
    status: { EN: "Available Today", AM: "ዛሬ ይገኛሉ" },
    available: true,
    rating: "4.9",
  },
];

export default function DoctorsPage() {
  const [lang, setLang] = useState<"EN" | "AM">("EN");
  const [search, setSearch] = useState("");

  const content = {
    EN: {
      badge: "Verified Medical Specialists",
      title: "Find & Consult Qualified Doctors",
      sub: "Connect instantly via video calls or request scheduled field dispatches with our certified medical staff.",
      searchPlaceholder: "Search doctor by name or specialty...",
      bookBtn: "Book Consultation",
      noResults: "No doctors found matching your query.",
      ratingLabel: "Rating",
    },
    AM: {
      badge: "የተረጋገጡ ህክምና ባለሙያዎች",
      title: "ብቁ ሐኪሞችን ይፈልጉ እና ያማክሩ",
      sub: "ከባለሙያ ሐኪሞቻችን ጋር በቪዲዮ ጥሪ ወይም በቤት ለቤት ህክምና አሁኑኑ ይገናኙ።",
      searchPlaceholder: "በሐኪም ስም ወይም በስፔሻሊቲ ፈልግ...",
      bookBtn: "ቀጠሮ ይያዙ",
      noResults: "ምንም የተገኘ ሐኪም የለም።",
      ratingLabel: "ደረጃ",
    },
  };

  const t = content[lang];

  // Search Filter logic
  const filteredDoctors = doctorsList.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty[lang].toLowerCase().includes(search.toLowerCase()),
  );

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

        {/* DIRECTORY SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* SEARCH INPUT BAR (WITH FIXED HIGH-CONTRAST TEXT & PLACEHOLDER) */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] shadow-sm font-medium"
              />
              <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm">
                🔍
              </span>
            </div>
          </div>

          {/* DOCTOR GRID */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4 text-center">
                    {/* Avatar & Status Indicator */}
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-4xl border border-slate-200">
                        {doc.avatar}
                      </div>
                      <span
                        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                          doc.available ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                        title={doc.status[lang]}
                      ></span>
                    </div>

                    {/* Doctor Info */}
                    <div>
                      <h3 className="font-bold text-[#1B365D] text-base">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-[#00A896] font-semibold mt-0.5">
                        {doc.specialty[lang]}
                      </p>

                      <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 mt-2">
                        <span>{doc.experience}</span>
                        <span>•</span>
                        <span className="text-amber-500 font-semibold flex items-center gap-1">
                          ★ {doc.rating}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="pt-1">
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                          doc.available
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                            : "bg-slate-50 text-slate-500 border-slate-200"
                        }`}
                      >
                        {doc.status[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <Link
                    href="/consultations"
                    className="w-full text-center bg-[#00A896] hover:bg-[#008f80] text-white font-semibold text-xs py-2.5 rounded-xl block transition-colors shadow-sm"
                  >
                    {t.bookBtn}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 text-sm">
              {t.noResults}
            </div>
          )}
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
