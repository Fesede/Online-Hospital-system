import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-slate-300 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-lg bg-[#00A896] flex items-center justify-center font-bold text-white text-sm">
                +
              </div>
              <span className="font-bold text-lg">TeleHealth Care</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bridging virtual consultations, AI triage, and sponsored field
              healthcare for connected patient care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#00A896] transition-colors"
                >
                  About System
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="hover:text-[#00A896] transition-colors"
                >
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/ngo-program"
                  className="hover:text-[#00A896] transition-colors"
                >
                  NGO Sponsorship
                </Link>
              </li>
              <li>
                <Link
                  href="/triage"
                  className="hover:text-[#00A896] transition-colors"
                >
                  AI Symptom Triage
                </Link>
              </li>
            </ul>
          </div>

          {/* User Roles */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Portals</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/portal/patient"
                  className="hover:text-[#00A896] transition-colors"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/portal/doctor"
                  className="hover:text-[#00A896] transition-colors"
                >
                  Doctor Console
                </Link>
              </li>
              <li>
                <Link
                  href="/portal/ngo"
                  className="hover:text-[#00A896] transition-colors"
                >
                  Sponsor Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/portal/admin"
                  className="hover:text-[#00A896] transition-colors"
                >
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Security & Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">
              Compliance
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Encrypted WebRTC video calls & HIPAA-compliant data auditing.
            </p>
            <div className="inline-block bg-[#00A896]/10 text-[#00A896] text-[11px] font-semibold px-2.5 py-1 rounded border border-[#00A896]/30">
              ✓ HIPAA Compliant
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} TeleHealth System. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="hover:text-[#00A896] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#00A896] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="hover:text-[#00A896] transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
