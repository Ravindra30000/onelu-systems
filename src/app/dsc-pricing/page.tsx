import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Class 3 DSC Pricing | 1 Lu Next Gen Technologies",
  description:
    "Affordable Class 3 Digital Signature Certificate prices — Sign Only and Sign+Encrypt. All prices include GST. Based in Raipur, Chhattisgarh.",
};

export default function DSCPricingPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-100 rounded-full mb-4">
            Authorized CA Partner
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-lu-text mb-4">
            Class 3 DSC Pricing
          </h1>
          <p className="text-lu-muted text-lg max-w-2xl mx-auto">
            Authorized partner for e-Mudhra, NCode &amp; Capricorn CA. Competitive prices, free KYC guidance, and fast issuance — typically within 1–2 hours.
          </p>
        </div>

        {/* Info banner */}
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4 mb-10 text-sm text-lu-blue">
          <Info size={16} className="shrink-0 mt-0.5" />
          <span>
            All prices <strong>include GST</strong>. Token (e-Pass / similar device) can be purchased separately if required.
            Prices shown are for DSC without token.
          </span>
        </div>

        {/* Sign Only table */}
        <section id="sign" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-lu-text mb-2">Class 3 – Sign Only</h2>
          <p className="text-sm text-lu-muted mb-5">
            Used for: GST filing, MCA/ROC filings, income tax e-filing, and general document signing.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-lu-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-lu-blue text-white">
                  <th className="text-left px-6 py-3.5 font-semibold">Validity</th>
                  <th className="text-right px-6 py-3.5 font-semibold">Price (incl. GST)</th>
                  <th className="text-right px-6 py-3.5 font-semibold hidden sm:table-cell"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lu-border bg-white">
                {[
                  { validity: "1 Year", price: "₹825" },
                  { validity: "2 Years", price: "₹1,150" },
                  { validity: "3 Years", price: "₹1,450", best: true },
                ].map((row) => (
                  <tr key={row.validity} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-lu-text font-medium">
                      {row.validity}
                      {row.best && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-lu-blue text-base">{row.price}</td>
                    <td className="px-6 py-4 text-right hidden sm:table-cell">
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-lu-blue border border-lu-blue px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        Order Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sign + Encrypt table */}
        <section id="sign-encrypt" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-lu-text mb-2">Class 3 – Sign + Encryption</h2>
          <p className="text-sm text-lu-muted mb-5">
            Used for: Government tenders, e-procurement, NSWS, ICE-Gate, DGFT, and secure encrypted document handling.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-lu-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-lu-blue text-white">
                  <th className="text-left px-6 py-3.5 font-semibold">Validity</th>
                  <th className="text-right px-6 py-3.5 font-semibold">Price (incl. GST)</th>
                  <th className="text-right px-6 py-3.5 font-semibold hidden sm:table-cell"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lu-border bg-white">
                {[
                  { validity: "1 Year", price: "₹1,350" },
                  { validity: "2 Years", price: "₹1,650" },
                  { validity: "3 Years", price: "₹2,200", best: true },
                ].map((row) => (
                  <tr key={row.validity} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-lu-text font-medium">
                      {row.validity}
                      {row.best && (
                        <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                          Best Value
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-lu-blue text-base">{row.price}</td>
                    <td className="px-6 py-4 text-right hidden sm:table-cell">
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-lu-blue border border-lu-blue px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        Order Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Special offer */}
        <section id="individual" className="mb-14 scroll-mt-20">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-lu-orange bg-orange-100 rounded-full mb-3">
                  ⭐ Special Offer
                </span>
                <h2 className="text-xl font-bold text-lu-text mb-2">
                  Individual DSC — 3 Years
                </h2>
                <p className="text-lu-muted text-sm max-w-md">
                  Ideal for professionals, freelancers, and individuals who file GST, MCA, or participate in tenders.
                  Includes full KYC support and installation guidance.
                </p>
                <ul className="mt-3 space-y-1">
                  {[
                    "Class 3 DSC valid for 3 years",
                    "Full KYC guidance included",
                    "Free installation support",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-lu-muted">
                      <CheckCircle size={14} className="text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center shrink-0">
                <p className="text-4xl font-bold text-lu-blue">₹2,000</p>
                <p className="text-xs text-lu-muted mt-1 mb-4">incl. GST</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-lu-blue rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What DSC is used for */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-lu-text mb-6">What is a Class 3 DSC used for?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "GST filing & registration",
              "MCA / ROC filings",
              "Income tax e-filing",
              "Government tenders & e-procurement",
              "DGFT & ICE-Gate portals",
              "NSWS (National Single Window System)",
              "Secure document signing",
              "Document encryption",
              "e-Pass / USB token operations",
            ].map((use) => (
              <div key={use} className="flex items-center gap-2.5 bg-white border border-lu-border rounded-xl px-4 py-3 text-sm text-lu-text">
                <CheckCircle size={14} className="text-green-500 shrink-0" />
                {use}
              </div>
            ))}
          </div>
        </section>

        {/* CA Partners */}
        <section className="mb-14 bg-gray-50 border border-lu-border rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-lu-text mb-4">Our Certifying Authority Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {[
              { name: "e-Mudhra", url: "https://www.emudhra.com", desc: "Class 3 DSC — India's leading CA" },
              { name: "NCode", url: "https://ncode.in", desc: "Class 3 DSC — NSDL group" },
              { name: "Capricorn CA / VSign", url: "https://capricornca.com", desc: "Class 3 DSC — Trusted CA" },
            ].map((ca) => (
              <a
                key={ca.name}
                href={ca.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 bg-white border border-lu-border rounded-xl p-4 hover:border-lu-blue transition-colors"
              >
                <span className="font-semibold text-lu-text">{ca.name}</span>
                <span className="text-xs text-lu-muted">{ca.desc}</span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-lu-blue rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to get your DSC?</h2>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Send us an enquiry or request a callback. Our expert will guide you through the entire process — KYC, verification, and installation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-semibold text-lu-blue bg-white rounded-lg hover:bg-blue-50 transition-colors"
            >
              Order / Enquire
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white border border-white/40 rounded-lg hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
