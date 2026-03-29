import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | 1 Lu Next Gen Technologies",
  description:
    "Web development from ₹4,999, app development from ₹14,999, workshops, and logo design. Affordable digital services from Raipur, Chhattisgarh.",
};

function PricingCard({
  title,
  price,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 flex flex-col gap-4 ${
        highlight
          ? "border-lu-blue bg-blue-50 shadow-md"
          : "border-lu-border bg-white"
      }`}
    >
      <div>
        <h3 className="font-semibold text-lu-text text-lg">{title}</h3>
        <p className="text-2xl font-bold text-lu-blue mt-1">{price}</p>
      </div>
      <ul className="space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-lu-muted">
            <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`text-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
          highlight
            ? "bg-lu-blue text-white hover:bg-blue-700"
            : "border border-lu-blue text-lu-blue hover:bg-blue-50"
        }`}
      >
        Get a Quote
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-lu-text mb-4">Our Services</h1>
          <p className="text-lu-muted text-lg max-w-2xl mx-auto">
            Transparent pricing, no hidden fees. Built for startups, freelancers, and small businesses.
          </p>
        </div>

        {/* Web Development */}
        <section id="web" className="mb-20 scroll-mt-20">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-lu-blue bg-blue-50 border border-blue-100 rounded-full mb-3">
              Web Development
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-lu-text mb-2">
              Lightweight, Responsive &amp; SEO-Friendly Websites
            </h2>
            <p className="text-lu-muted max-w-2xl">
              We build websites that work perfectly on phones, tablets, and desktops — fast, secure, and easy to maintain within your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <PricingCard
              title="Basic Website"
              price="₹4,999 / project"
              features={[
                "Up to 5 pages (Home, About, Services, Contact, Blog optional)",
                "Responsive mobile-friendly design",
                "Basic SEO setup (meta tags, page titles)",
                "Hosted on your shared hosting (you purchase domain + hosting)",
                "1–2 rounds of revisions",
              ]}
            />
            <PricingCard
              title="Premium Unlimited Website"
              price="₹8,999 / project"
              features={[
                "Unlimited pages — expand as your business grows",
                "Dynamic contact form + email integration",
                "Advanced SEO (sitemap, robots.txt, canonical tags)",
                "Custom design — not template-based",
                "Unlimited revisions during development",
                "Free 1-month support for bugs & small changes",
              ]}
              highlight
            />
          </div>
        </section>

        {/* App Development */}
        <section id="app" className="mb-20 scroll-mt-20">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-lu-coral bg-red-50 border border-red-100 rounded-full mb-3">
              App Development
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-lu-text mb-2">
              Full-Stack Web &amp; Hybrid Mobile Apps
            </h2>
            <p className="text-lu-muted max-w-2xl">
              Custom apps with smooth user experience and solid backend. We select the right technology for your project — lightweight, scalable, and easy to maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <PricingCard
              title="Basic App"
              price="₹14,999"
              features={[
                "2–4 core features",
                "Basic admin dashboard",
                "Single-device testing (web + mobile view)",
                "Setup on shared hosting (client handles domain/hosting)",
                "Web app or simple hybrid mobile app",
              ]}
            />
            <PricingCard
              title="Full-Stack App"
              price="₹24,999"
              features={[
                "Fully custom backend API",
                "User authentication & role management",
                "Admin panel for data management",
                "Responsive frontend + optional PWA",
                "Free 1-month bug-fix support",
              ]}
              highlight
            />
          </div>

          <p className="mt-6 text-sm text-lu-muted">
            Need something bigger? We also offer{" "}
            <Link href="/contact" className="text-lu-blue hover:underline">
              custom quotes
            </Link>{" "}
            for e-commerce, ERP-lite, tender management systems, and more.
          </p>
        </section>

        {/* Workshops */}
        <section id="workshops" className="mb-20 scroll-mt-20">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-100 rounded-full mb-3">
              Workshops &amp; Training
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-lu-text mb-2">
              Hands-On Learning for Everyone
            </h2>
            <p className="text-lu-muted max-w-2xl">
              Designed for beginners and non-technical learners who want to build real web projects or start freelancing. Group discounts available.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {[
              {
                title: "Web Development Workshop",
                price: "From ₹1,499 / participant",
                points: [
                  "HTML, CSS, JavaScript basics",
                  "Build a simple portfolio site",
                  "Group discounts available",
                ],
              },
              {
                title: "UI/UX & Design Thinking",
                price: "From ₹1,999 / participant",
                points: [
                  "Layout, color & typography fundamentals",
                  "Figma-style design tools",
                  "Hands-on project",
                ],
              },
              {
                title: "AI Tools Workshop",
                price: "From ₹1,299 / participant",
                points: [
                  "AI assistants & chatbots",
                  "Automation for marketing & content",
                  "No coding experience required",
                ],
              },
            ].map((w) => (
              <div key={w.title} className="bg-white border border-lu-border rounded-2xl p-6 flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-lu-text">{w.title}</h3>
                  <p className="text-sm font-bold text-lu-blue mt-1">{w.price}</p>
                </div>
                <ul className="space-y-2 flex-1">
                  {w.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-lu-muted">
                      <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-center px-4 py-2 text-sm font-semibold border border-lu-blue text-lu-blue rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Logo & Brand */}
        <section id="logo" className="mb-16 scroll-mt-20">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-lu-orange bg-orange-50 border border-orange-100 rounded-full mb-3">
              Logo &amp; Brand Design
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-lu-text mb-2">
              Simple, Modern Brand Identity
            </h2>
            <p className="text-lu-muted max-w-2xl">
              Logos and brand kits for startups, shops, schools, and freelancers — delivered in formats you can use everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <PricingCard
              title="Logo Design"
              price="₹499"
              features={[
                "2–3 concept options",
                "Basic color palette + 1 recommended font",
                "Delivery in PNG + vector (PDF/SVG)",
              ]}
            />
            <PricingCard
              title="Premium Logo Pack"
              price="₹1,499"
              features={[
                "5 logo concept options",
                "Full color palette + compatible fonts",
                "Social media profile & banner versions",
                "1-page brand guideline document",
              ]}
              highlight
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-lu-blue rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Not sure which package you need?</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Send us an enquiry and we&apos;ll recommend the right solution for your budget and requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-sm font-semibold text-lu-blue bg-white rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
