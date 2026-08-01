"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [lang, setLang] = useState<"EN" | "AM">("EN");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "consultation",
    message: "",
  });

  const content = {
    EN: {
      badge: "Get In Touch",
      title: "Contact Support & Inquiries",
      sub: "Have questions about virtual visits, NGO sponsorship, or technical support? Our team is available 24/7.",
      formTitle: "Send Us a Message",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Abebe Bikila",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      subjectLabel: "Inquiry Type",
      subGeneral: "General Question",
      subConsult: "Virtual Visit Support",
      subNgo: "NGO Partnership / Sponsorship",
      subTech: "Technical Issue",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you today?",
      sendBtn: "Send Message",
      successMsg:
        "Thank you! Your message has been sent successfully. We will get back to you shortly.",
      infoTitle: "Direct Support Channels",
      phoneTitle: "Call Us",
      phoneNum: "+251 911 00 00 00",
      emailTitle: "Email Us",
      emailAddr: "support@telehealthcare.com",
      locationTitle: "Main Office",
      locationAddr: "Addis Ababa, Ethiopia",
      emergencyBadge: "Emergency Note",
      emergencyText:
        "For critical medical emergencies, please reach out directly to your nearest local hospital or emergency dispatch services.",
    },
    AM: {
      badge: "የእውቂያ መረጃ",
      title: "አስተያየት እና ጥያቄ ያድርሱን",
      sub: "ስለ ቪዲዮ ህክምና፣ የኤንጂኦ ድጋፍ ወይም የቴክኒክ እርዳታ ጥያቄ አለዎት? ቡድናችን ሁልጊዜ ዝግጁ ነው።",
      formTitle: "መልእክት ይላኩልን",
      nameLabel: "ሙሉ ስም",
      namePlaceholder: "ምሳሌ፡ አበበ በቀለ",
      emailLabel: "ኢሜይል አድራሻ",
      emailPlaceholder: "name@example.com",
      subjectLabel: "የጥያቄው ዓይነት",
      subGeneral: "አጠቃላይ ጥያቄ",
      subConsult: "የቪዲዮ ህክምና እርዳታ",
      subNgo: "የኤንጂኦ አጋርነት / ስፖንሰርሺፕ",
      subTech: "የቴክኒክ ችግር",
      messageLabel: "መልእክት",
      messagePlaceholder: "እንዴት እንረዳዎ?",
      sendBtn: "መልእክት ላክ",
      successMsg: "እናመሰግናለን! መልእክትዎ በተሳካ ሁኔታ ተልኳል። በቅርብ ጊዜ እንመልሳለን።",
      infoTitle: "ቀጥታ አድራሻዎቻችን",
      phoneTitle: "ስልክ ቁጥር",
      phoneNum: "+251 911 00 00 00",
      emailTitle: "ኢሜይል",
      emailAddr: "support@telehealthcare.com",
      locationTitle: "ዋና ቢሮ",
      locationAddr: "አዲስ አበባ፣ ኢትዮጵያ",
      emergencyBadge: "የአደጋ ጊዜ ማስታወሻ",
      emergencyText:
        "ለአስቸኳይ ህክምና አደጋዎች እባክዎን በቀጥታ ወደ அருகራችሁ የሚገኝ ሆስፒታል ወይም የአደጋ ጊዜ መላኪያ ደውሉ።",
    },
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

        {/* MAIN SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* CONTACT FORM */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-[#1B365D] mb-6">
                {t.formTitle}
              </h2>

              {submitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-center space-y-3">
                  <span className="text-3xl block">✅</span>
                  <p className="text-sm font-medium leading-relaxed">
                    {t.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-[#00A896] font-semibold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]"
                      />
                    </div>

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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.subjectLabel}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]"
                    >
                      <option value="general">{t.subGeneral}</option>
                      <option value="consultation">{t.subConsult}</option>
                      <option value="ngo">{t.subNgo}</option>
                      <option value="tech">{t.subTech}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder={t.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00A896] hover:bg-[#008f80] text-white font-semibold py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    {t.sendBtn}
                  </button>
                </form>
              )}
            </div>

            {/* DIRECT INFO & EMERGENCY CARD */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#1B365D]">
                  {t.infoTitle}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-base flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        {t.phoneTitle}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#1B365D]">
                        {t.phoneNum}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-base flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        {t.emailTitle}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#1B365D]">
                        {t.emailAddr}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-base flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">
                        {t.locationTitle}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#1B365D]">
                        {t.locationAddr}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl space-y-2">
                <span className="text-[10px] font-bold bg-rose-200 text-rose-800 px-2 py-0.5 rounded uppercase tracking-wide">
                  {t.emergencyBadge}
                </span>
                <p className="text-xs text-rose-900 leading-relaxed font-medium">
                  {t.emergencyText}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
