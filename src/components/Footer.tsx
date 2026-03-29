import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-lu-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/onelu-logo.png" alt="1 Lu Logo" width={36} height={36} />
              <span className="font-bold text-lu-text text-sm leading-tight">
                1 Lu Next Gen<br />Technologies
              </span>
            </Link>
            <p className="text-sm text-lu-muted leading-relaxed mb-3">
              Affordable web, app &amp; DSC services for startups, freelancers, and small businesses across India.
            </p>
            <p className="text-sm text-lu-muted">📍 Raipur, Chhattisgarh, India</p>
            <a
              href="mailto:contact@1lutechs.com"
              className="text-sm text-lu-muted hover:text-lu-blue transition-colors mt-1 block"
            >
              contact@1lutechs.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lu-text mb-4 text-xs uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-lu-muted">
              <li>
                <Link href="/services#web" className="hover:text-lu-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#app" className="hover:text-lu-blue transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services#workshops" className="hover:text-lu-blue transition-colors">
                  Workshops &amp; Training
                </Link>
              </li>
              <li>
                <Link href="/services#logo" className="hover:text-lu-blue transition-colors">
                  Logo &amp; Brand Design
                </Link>
              </li>
            </ul>
          </div>

          {/* DSC */}
          <div>
            <h3 className="font-semibold text-lu-text mb-4 text-xs uppercase tracking-wider">DSC Services</h3>
            <ul className="space-y-2 text-sm text-lu-muted">
              <li>
                <Link href="/dsc-pricing" className="hover:text-lu-blue transition-colors">
                  Class 3 DSC Pricing
                </Link>
              </li>
              <li>
                <Link href="/dsc-pricing#sign" className="hover:text-lu-blue transition-colors">
                  Sign Only DSC
                </Link>
              </li>
              <li>
                <Link href="/dsc-pricing#sign-encrypt" className="hover:text-lu-blue transition-colors">
                  Sign + Encrypt DSC
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold text-lu-text mt-6 mb-3 text-xs uppercase tracking-wider">CA Partners</h3>
            <ul className="space-y-1.5 text-sm text-lu-muted">
              <li>
                <a
                  href="https://www.emudhra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lu-blue transition-colors"
                >
                  e-Mudhra
                </a>
              </li>
              <li>
                <a
                  href="https://ncode.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lu-blue transition-colors"
                >
                  NCode
                </a>
              </li>
              <li>
                <a
                  href="https://capricornca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lu-blue transition-colors"
                >
                  Capricorn CA / VSign
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lu-text mb-4 text-xs uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2 text-sm text-lu-muted">
              <li>
                <a
                  href="https://instagram.com/1lutechs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lu-blue transition-colors"
                >
                  Instagram: @1lutechs
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/1lutechs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lu-blue transition-colors"
                >
                  Facebook: @1lutechs
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/1lutechs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lu-blue transition-colors"
                >
                  LinkedIn: 1lutechs
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-lu-blue rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-lu-border flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-lu-muted">
          <p>© {new Date().getFullYear()} 1 Lu Next Gen Technologies. All rights reserved.</p>
          <p>Raipur, Chhattisgarh, India</p>
        </div>
      </div>
    </footer>
  );
}
