"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is a Class 3 Digital Signature Certificate (DSC)?",
    a: "A Class 3 DSC is the highest level of digital signature in India, used for government tenders, GST/MCA filings, income tax e-filing, DGFT, ICE-Gate, and secure document signing. It verifies your identity with the highest assurance level.",
  },
  {
    q: "How long does it take to issue a DSC?",
    a: "Once you submit your KYC documents and complete the video verification process, a Class 3 DSC is typically issued within 1–2 business hours. We guide you through every step of the process.",
  },
  {
    q: "What's included in the Basic Website package (₹4,999)?",
    a: "The basic package includes up to 5 pages (Home, About, Services, Contact, and an optional Blog), responsive mobile-friendly design, basic SEO setup (meta tags, page titles), and 1–2 rounds of revisions. You purchase your own domain and hosting.",
  },
  {
    q: "Do I need to provide my own domain and hosting?",
    a: "For web development packages, you purchase your own domain and hosting plan (we'll guide you on what to buy). This keeps your costs transparent and puts you in full control of your online presence.",
  },
  {
    q: "Can you build mobile apps too?",
    a: "Yes! We build cross-platform mobile apps using Flutter and Progressive Web Apps (PWA). Our Basic App package starts at ₹14,999 and the Full-Stack App at ₹24,999, covering custom backend, auth, and admin panels.",
  },
  {
    q: "What kind of support do you provide after delivery?",
    a: "Our Premium Website (₹8,999) and Full-Stack App (₹24,999) packages include 1 month of free bug-fix and minor-change support after delivery. For ongoing maintenance, we offer custom support plans.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lu-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lu-muted text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-lu-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lu-text pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-lu-muted transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-lu-muted leading-relaxed border-t border-lu-border bg-gray-50">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-lu-muted">
          Still have questions?{" "}
          <a href="/contact" className="text-lu-blue font-medium hover:underline">
            Contact us
          </a>{" "}
          and we&apos;ll get back to you within 24 hours.
        </p>
      </div>
    </section>
  );
}
