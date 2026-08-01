"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookAppointmentPage() {
  const [lang, setLang] = useState<"EN" | "AM">("EN");
  const [isRegistered, setIsRegistered] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Quick Registration State
  const [regData, setRegData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    doctor: "dr-abebe",
    consultationType: "video",
    date: "",
    timeSlot: "09:00 AM",
    notes: "",
    locationAddress: "Addis Ababa, Ethiopia",
    latitude: 9.032,
    longitude: 38.7421,
  });

  const content = {
    EN: {
      badge: "Step 1 of 2",
      badgeBook: "Step 2 of 2",
      titleReg: "Patient Registration",
      subReg:
        "Please create a quick account or sign in before scheduling your consultation.",
      titleBook: "Book Appointment",
      subBook:
        "Select your doctor, preferred date, consultation method, and pin your location.",

      // Reg Form
      regTitle: "Account Information",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Abebe Bikila",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+251 911 00 00 00",
      passLabel: "Create Password",
      passPlaceholder: "••••••••",
      regBtn: "Register & Continue to Booking",
      alreadyAccount: "Already registered?",
      signInLink: "Sign In",

      // Booking Form
      docLabel: "Select Specialist / Doctor",
      typeLabel: "Consultation Type",
      typeVideo: "📹 Virtual Video Call",
      typeField: "🚑 NGO Field Visit / Home Care",
      dateLabel: "Preferred Date",
      timeLabel: "Time Slot",
      locationLabel: "Pin Patient Location on Map",
      locationPlaceholder: "Enter street address or region...",
      useGPS: "📍 Detect My Current Location",
      notesLabel: "Symptoms / Reason for Visit",
      notesPlaceholder: "Describe your symptoms...",
      confirmBtn: "Confirm & Complete Booking",

      // Success
      successTitle: "Appointment Confirmed!",
      successMsg:
        "Your booking, location, and patient record have been registered. Details were sent to your email and phone.",
      bookAnother: "Book Another Appointment",
    },
    AM: {
      badge: "ደረጃ 1 ከ 2",
      badgeBook: "ደረጃ 2 ከ 2",
      titleReg: "የታካሚ ምዝገባ",
      subReg: "ቀጠሮ ከመያዝዎ በፊት እባክዎን አጭር አካውንት ይክፈቱ ወይም ይግቡ።",
      titleBook: "የህክምና ቀጠሮ ይያዙ",
      subBook: "ሐኪም፣ የሚመችዎትን ቀን፣ የህክምና ዓይነት እና ቦታዎን በካርታ ላይ ይምረጡ።",

      // Reg Form
      regTitle: "የመለያ መረጃ",
      nameLabel: "ሙሉ ስም",
      namePlaceholder: "ምሳሌ፡ አበበ በቀለ",
      emailLabel: "ኢሜይል አድራሻ",
      emailPlaceholder: "name@example.com",
      phoneLabel: "ስልክ ቁጥር",
      phonePlaceholder: "+251 911 00 00 00",
      passLabel: "የይለፍ ቃል ፍጠር",
      passPlaceholder: "••••••••",
      regBtn: "ተመዝገብ እና ወደ ቀጠሮ ቀጥል",
      alreadyAccount: "ተመዝግበዋል?",
      signInLink: "ይግቡ",

      // Booking Form
      docLabel: "ሐኪም ይምረጡ",
      typeLabel: "የህክምና ዓይነት",
      typeVideo: "📹 የቪዲዮ ጥሪ ህክምና",
      typeField: "🚑 የቤት ለቤት ህክምና",
      dateLabel: "የሚፈልጉት ቀን",
      timeLabel: "የሰዓት አማራጭ",
      locationLabel: "ቦታዎን በካርታ ላይ ይጠቁሙ",
      locationPlaceholder: "የመንገድ አድራሻ ወይም ሰፈር ያስገቡ...",
      useGPS: "📍 ያለሁበትን ቦታ በጂፒኤስ አግኝ",
      notesLabel: "የሕመም ምልክቶች አጭር መግለጫ",
      notesPlaceholder: "ስለ ሕመምዎ ወይም የቀጠሮው ምክንያት ያብራሩ...",
      confirmBtn: "ቀጠሮውን አረጋግጥ",

      // Success
      successTitle: "ቀጠሮው ተይዟል!",
      successMsg:
        "ምዝገባዎ፣ የአድራሻ ቦታዎ እና የቀጠሮ ጥያቄዎ በተሳካ ሁኔታ ተረጋግጧል። ዝርዝሩ ወደ ስልክዎ ተልኳል።",
      bookAnother: "ሌላ ቀጠሮ ይያዙ",
    },
  };

  const t = content[lang];

  const doctorsList = [
    { id: "dr-abebe", name: "Dr. Abebe Bikila — General Practitioner" },
    { id: "dr-bethel", name: "Dr. Beth-El Demissie — Pediatrician" },
    { id: "dr-samuel", name: "Dr. Samuel Tadesse — Internal Medicine" },
    { id: "dr-tigist", name: "Dr. Tigist Haile — Gynecologist" },
  ];

  const timeSlots = [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
  ];

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setBookingData((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            locationAddress: `Lat: ${position.coords.latitude.toFixed(4)}, Lon: ${position.coords.longitude.toFixed(4)}`,
          }));
        },
        () => {
          alert(
            lang === "EN"
              ? "Unable to retrieve your location."
              : "ቦታዎን ማግኘት አልተቻለም።",
          );
        },
      );
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
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
              {isRegistered ? t.badgeBook : t.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {isRegistered ? t.titleBook : t.titleReg}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              {isRegistered ? t.subBook : t.subReg}
            </p>
          </div>
        </section>

        {/* MAIN SECTION */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
            {/* SUCCESS STATE */}
            {submitted ? (
              <div className="p-8 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-center space-y-4">
                <span className="text-4xl block">🎉</span>
                <h3 className="text-lg font-bold text-emerald-900">
                  {t.successTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto">
                  {t.successMsg}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setIsRegistered(false);
                  }}
                  className="mt-4 bg-[#00A896] hover:bg-[#008f80] text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  {t.bookAnother}
                </button>
              </div>
            ) : !isRegistered ? (
              /* STEP 1: PATIENT REGISTRATION FORM */
              <form onSubmit={handleRegister} className="space-y-4">
                <h2 className="text-lg font-bold text-[#1B365D] mb-4 border-b border-slate-100 pb-3">
                  {t.regTitle}
                </h2>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.namePlaceholder}
                    value={regData.fullName}
                    onChange={(e) =>
                      setRegData({ ...regData, fullName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      value={regData.email}
                      onChange={(e) =>
                        setRegData({ ...regData, email: e.target.value })
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
                      value={regData.phone}
                      onChange={(e) =>
                        setRegData({ ...regData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.passLabel}
                  </label>
                  <input
                    type="password"
                    required
                    placeholder={t.passPlaceholder}
                    value={regData.password}
                    onChange={(e) =>
                      setRegData({ ...regData, password: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00A896] hover:bg-[#008f80] text-white font-semibold py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-sm mt-4"
                >
                  {t.regBtn}
                </button>

                <p className="text-center text-xs text-slate-600 pt-2">
                  {t.alreadyAccount}{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-[#00A896] hover:underline"
                  >
                    {t.signInLink}
                  </Link>
                </p>
              </form>
            ) : (
              /* STEP 2: APPOINTMENT DETAILS & LOCATION MAP FORM */
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="text-lg font-bold text-[#1B365D]">
                    {t.titleBook}
                  </h2>
                  <span className="text-xs text-slate-500">
                    Patient:{" "}
                    <strong className="text-slate-800">
                      {regData.fullName}
                    </strong>
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.docLabel}
                  </label>
                  <select
                    value={bookingData.doctor}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, doctor: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                  >
                    {doctorsList.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    {t.typeLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          consultationType: "video",
                        })
                      }
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                        bookingData.consultationType === "video"
                          ? "border-[#00A896] bg-[#00A896]/10 text-[#00A896]"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {t.typeVideo}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          consultationType: "field",
                        })
                      }
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                        bookingData.consultationType === "field"
                          ? "border-[#00A896] bg-[#00A896]/10 text-[#00A896]"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {t.typeField}
                    </button>
                  </div>
                </div>

                {/* LOCATION MAP SECTION */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-700">
                      {t.locationLabel}
                    </label>
                    <button
                      type="button"
                      onClick={handleDetectLocation}
                      className="text-[11px] font-semibold text-[#00A896] hover:underline"
                    >
                      {t.useGPS}
                    </button>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder={t.locationPlaceholder}
                    value={bookingData.locationAddress}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        locationAddress: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                  />

                  {/* EMBEDDED OPENSTREETMAP IFRAME */}
                  <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-300 relative shadow-inner mt-2">
                    <iframe
                      title="Patient Location Map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                        bookingData.longitude - 0.01
                      }%2C${bookingData.latitude - 0.01}%2C${
                        bookingData.longitude + 0.01
                      }%2C${
                        bookingData.latitude + 0.01
                      }&layer=mapnik&marker=${bookingData.latitude}%2C${
                        bookingData.longitude
                      }`}
                    ></iframe>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.dateLabel}
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, date: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.timeLabel}
                    </label>
                    <select
                      value={bookingData.timeSlot}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          timeSlot: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.notesPlaceholder}
                    value={bookingData.notes}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, notes: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#00A896] focus:ring-1 focus:ring-[#00A896] font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00A896] hover:bg-[#008f80] text-white font-semibold py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-sm mt-4"
                >
                  {t.confirmBtn}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
