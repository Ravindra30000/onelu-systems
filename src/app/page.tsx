import Link from "next/link";
import Image from "next/image";
import { Globe, Code2, FileSignature, Palette, GraduationCap, CheckCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-lu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-lu-blue bg-blue-50 border border-blue-100 rounded-full mb-6">
              📍 Based in Raipur, Chhattisgarh
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lu-text leading-tight mb-6">
              Build Fast,{" "}
              <span className="text-lu-blue">Secure</span>{" "}
              &amp;{" "}
              <span className="text-lu-coral">Affordable.</span>
            </h1>
            <p className="text-lg md:text-xl text-lu-muted leading-relaxed mb-8 max-w-2xl">
              Web development from <strong className="text-lu-text">₹4,999</strong> · Class 3 DSC from{" "}
              <strong className="text-lu-text">₹825</strong> · Full-stack apps that grow with your business.
              Get your website, app, or digital signature done right — without paying enterprise prices.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-lu-blue rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/dsc-pricing"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-lu-blue border border-lu-blue rounded-lg hover:bg-blue-50 transition-colors"
              >
                View DSC Pricing
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-4">
            {[
              { label: "Websites from ₹4,999", color: "bg-blue-50 text-lu-blue border-blue-100" },
              { label: "DSC from ₹825 incl. GST", color: "bg-green-50 text-green-700 border-green-100" },
              { label: "Apps from ₹14,999", color: "bg-orange-50 text-lu-orange border-orange-100" },
              { label: "Free 24-hr Support", color: "bg-purple-50 text-purple-700 border-purple-100" },
            ].map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-full ${badge.color}`}
              >
                <CheckCircle size={12} />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-lu-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lu-text mb-4">What We Do</h2>
            <p className="text-lu-muted text-lg max-w-2xl mx-auto">
              End-to-end digital services for startups, freelancers, and small businesses across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe size={24} className="text-lu-blue" />,
                title: "Web Development",
                desc: "Responsive, SEO-friendly websites built fast and kept affordable.",
                price: "From ₹4,999",
                href: "/services#web",
                accent: "bg-blue-50 border-blue-100",
              },
              {
                icon: <Code2 size={24} className="text-lu-coral" />,
                title: "App Development",
                desc: "Full-stack web & hybrid mobile apps with custom backend APIs.",
                price: "From ₹14,999",
                href: "/services#app",
                accent: "bg-red-50 border-red-100",
              },
              {
                icon: <FileSignature size={24} className="text-green-600" />,
                title: "Class 3 DSC",
                desc: "Authorized partner for e-Mudhra, NCode & Capricorn CA digital signatures.",
                price: "From ₹825",
                href: "/dsc-pricing",
                accent: "bg-green-50 border-green-100",
              },
              {
                icon: <Palette size={24} className="text-lu-orange" />,
                title: "Logo & Brand Design",
                desc: "Modern logos and brand kits for startups, shops, and freelancers.",
                price: "From ₹499",
                href: "/services#logo",
                accent: "bg-orange-50 border-orange-100",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl border border-lu-border p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl ${service.accent} border flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-lu-text mb-2 group-hover:text-lu-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-lu-muted leading-relaxed flex-1 mb-4">{service.desc}</p>
                <span className="text-sm font-bold text-lu-text">{service.price}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-lu-blue border border-lu-blue rounded-lg hover:bg-blue-50 transition-colors"
            >
              View All Services &amp; Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DSC HIGHLIGHT ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-y border-lu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-100 rounded-full mb-4">
                Authorized CA Partner
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-lu-text mb-4">
                Class 3 Digital Signature Certificates
              </h2>
              <p className="text-lu-muted leading-relaxed mb-6">
                We are an authorized partner for leading Indian Certifying Authorities. Get your Class 3 DSC
                for GST filing, MCA/ROC, income tax, government tenders, e-procurement, DGFT, and ICE-Gate —
                at highly competitive prices, with free KYC guidance.
              </p>
              <ul className="space-y-2 text-sm text-lu-muted mb-8">
                {[
                  "All prices include GST",
                  "Fast issuance — typically within 1–2 hours",
                  "Free setup & installation guidance",
                  "Token (e-Pass) available separately",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-green-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/dsc-pricing"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-lu-blue rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Full DSC Pricing
              </Link>
            </div>

            {/* Quick pricing table */}
            <div className="bg-lu-bg border border-lu-border rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-lu-blue text-white">
                <p className="font-semibold text-sm">Quick DSC Price Reference</p>
                <p className="text-xs text-blue-100 mt-0.5">All prices include GST</p>
              </div>
              <div className="divide-y divide-lu-border">
                {[
                  { type: "Sign Only — 1 Year", price: "₹825" },
                  { type: "Sign Only — 2 Years", price: "₹1,150" },
                  { type: "Sign Only — 3 Years", price: "₹1,450" },
                  { type: "Sign + Encrypt — 1 Year", price: "₹1,350" },
                  { type: "Sign + Encrypt — 2 Years", price: "₹1,650" },
                  { type: "Sign + Encrypt — 3 Years", price: "₹2,200" },
                  { type: "Individual DSC — 3 Years ⭐", price: "₹2,000" },
                ].map((row) => (
                  <div key={row.type} className="flex justify-between items-center px-6 py-3.5 text-sm">
                    <span className="text-lu-text">{row.type}</span>
                    <span className="font-bold text-lu-blue">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PRODUCTS ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built to solve real problems.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Sah Saathi */}
            <div className="border border-white/10 rounded-2xl p-8 flex flex-col gap-7 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image src="/sahsathi-logo.png" alt="Sah Saathi" width={44} height={44} className="rounded-xl" />
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">Sah Saathi</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Railway Infrastructure</p>
                  </div>
                </div>
                <span className="shrink-0 px-2.5 py-1 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 rounded-full">
                  Govt-backed
                </span>
              </div>

              <p className="text-gray-300 font-medium leading-relaxed">
                A digital coordination system for railway porter services.
              </p>

              <ul className="space-y-3">
                {[
                  "Passenger books → Porter responds → Service delivered.",
                  "Admin-coordinated. Fully regulation-compliant.",
                  "Selected under MeitY TIDE 2.0. Grant-supported.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lu-blue shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* CopyDude */}
            <div className="border border-white/10 rounded-2xl p-8 flex flex-col gap-7 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image src="/copydude-logo.jpg" alt="CopyDude" width={44} height={44} className="rounded-xl shrink-0 object-cover" />
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">CopyDude</h3>
                    <p className="text-xs text-gray-500 mt-0.5">PrintTech · EdTech</p>
                  </div>
                </div>
                <span className="shrink-0 px-2.5 py-1 text-xs font-semibold text-lu-blue bg-lu-blue/10 border border-lu-blue/20 rounded-full">
                  Live
                </span>
              </div>

              <p className="text-gray-300 font-medium leading-relaxed">
                A cloud-powered print kiosk system for instant document printing.
              </p>

              <ul className="space-y-3">
                {[
                  "Upload from phone. No app, no USB, no waiting.",
                  "Walk to kiosk. Enter code. Print in under 2 minutes.",
                  "Live at GEC Raipur. Expanding to colleges & stations.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lu-orange shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────── */}
      <section className="py-12 bg-white border-y border-lu-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-lu-muted mb-8">
            Technologies we work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js", "Vue.js", "Next.js", "Node.js", "Express.js",
              "Flutter", "PWA", "MySQL", "PostgreSQL", "REST APIs",
              "JWT Auth", "HTML5 / CSS3", "Tailwind CSS", "PHP",
              "e-Mudhra DSC", "NCode DSC",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium text-lu-muted bg-gray-50 border border-lu-border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKSHOPS STRIP ──────────────────────────────────────── */}
      <section className="py-16 bg-lu-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap size={36} className="text-white opacity-90" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Workshops &amp; Training
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto mb-6">
            Hands-on sessions for students, professionals, and non-technical learners — Web Dev, UI/UX, and AI Tools workshops starting from just ₹1,299 per participant.
          </p>
          <Link
            href="/services#workshops"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-lu-blue bg-white rounded-lg hover:bg-blue-50 transition-colors"
          >
            Learn More About Workshops
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-lu-bg border-t border-lu-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-lu-text mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lu-muted text-lg mb-8">
            Fill in a quick enquiry form and our team will respond within 24 hours with a detailed quote and next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-lu-blue rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send an Enquiry
            </Link>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25D366" }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
