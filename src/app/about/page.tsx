import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Target, Zap, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | 1 Lu Next Gen Technologies",
  description:
    "1 Lu Next Gen Technologies — affordable software development and digital-trust solutions from Raipur, Chhattisgarh. Our mission, values, and in-house products.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-lu-blue bg-blue-50 border border-blue-100 rounded-full mb-4">
            📍 Raipur, Chhattisgarh, India
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-lu-text mb-6">
            About 1 Lu Next Gen Technologies
          </h1>
          <p className="text-lu-muted text-lg leading-relaxed max-w-3xl">
            <strong className="text-lu-text">1 Lu Next Gen Technologies</strong> is a modern, affordable software
            development and digital-trust solutions company based in Raipur, Chhattisgarh. We specialise in{" "}
            <strong className="text-lu-text">lightweight, fast, and future-ready web and mobile applications</strong>,
            along with low-cost Class 3 Digital Signature Certificates (DSC) for individuals, professionals, and
            businesses across India.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Target size={24} className="text-lu-blue" />
            <h2 className="text-xl font-bold text-lu-text">Our Mission</h2>
          </div>
          <p className="text-lu-muted leading-relaxed text-base">
            Deliver <strong className="text-lu-text">high-quality digital products at ultra-competitive prices</strong>,
            so startups, freelancers, and small businesses can grow online without overspending. Whether you need a
            sleek website, a full-stack app, or a government-compliant DSC for tenders and GST/MCA filings —
            we build it fast, secure it properly, and keep costs low.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-lu-text mb-8">What Drives Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={22} className="text-lu-blue" />,
                title: "Speed",
                desc: "We build and deliver fast. No long timelines, no bloated processes.",
                bg: "bg-blue-50 border-blue-100",
              },
              {
                icon: <ShieldCheck size={22} className="text-lu-coral" />,
                title: "Security",
                desc: "Every product we build is secured properly — from code to infrastructure.",
                bg: "bg-red-50 border-red-100",
              },
              {
                icon: <Users size={22} className="text-lu-orange" />,
                title: "Affordability",
                desc: "Enterprise-quality work at prices that work for small businesses and freelancers.",
                bg: "bg-orange-50 border-orange-100",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-lu-border rounded-2xl p-6">
                <div className={`w-10 h-10 rounded-xl ${v.bg} border flex items-center justify-center mb-4`}>
                  {v.icon}
                </div>
                <h3 className="font-semibold text-lu-text mb-2">{v.title}</h3>
                <p className="text-sm text-lu-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-lu-text mb-4">Technologies We Use</h2>
          <p className="text-lu-muted mb-6 text-sm">
            We select the right technology for your project — balancing speed, cost, and long-term
            maintainability. Our stack is lightweight, easy to scale, and beginner-friendly for future developers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                category: "Frontend",
                items: "HTML5, CSS3, JavaScript, React.js, Vue.js",
              },
              {
                category: "Backend & APIs",
                items: "Node.js, Express.js, PHP, RESTful APIs, JWT Authentication",
              },
              {
                category: "Databases",
                items: "MySQL, PostgreSQL, SQLite",
              },
              {
                category: "Mobile & Apps",
                items: "Flutter (cross-platform), Progressive Web Apps (PWA)",
              },
              {
                category: "DSC & Security",
                items: "e-Mudhra, NCode, Capricorn CA integrations. e-Pass, WatchData USB tokens.",
              },
            ].map((t) => (
              <div key={t.category} className="bg-white border border-lu-border rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-lu-muted mb-2">
                  {t.category}
                </p>
                <p className="text-sm text-lu-text">{t.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* In-house products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-lu-text mb-3">Our In-House Platforms</h2>
          <p className="text-lu-muted text-sm mb-8">
            Products built by our team to solve real-world operational problems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-lu-border rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/sahsathi-logo.png"
                  alt="SahSaathi"
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="font-semibold text-lu-text">SahSaathi</h3>
                  <p className="text-xs text-lu-muted">Business Assistant Platform</p>
                </div>
              </div>
              <p className="text-sm text-lu-muted leading-relaxed">
                A smart business assistant platform designed to help small businesses manage operations, track tasks, and stay organised — built lightweight and mobile-ready.
              </p>
            </div>
            <div className="bg-white border border-lu-border rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/copydude-logo.png"
                  alt="CopyDude"
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="font-semibold text-lu-text">CopyDude</h3>
                  <p className="text-xs text-lu-muted">Content &amp; Document Service</p>
                </div>
              </div>
              <p className="text-sm text-lu-muted leading-relaxed">
                A document handling and content management solution that simplifies copying, organising, and distributing business documents at scale.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-lu-blue rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Work with us</h2>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Whether you need a website, an app, a DSC, or a logo — we&apos;re here to help you get it done right and within budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-sm font-semibold text-lu-blue bg-white rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
