import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CallbackForm from "@/components/CallbackForm";

export const metadata: Metadata = {
  title: "Contact Us | 1 Lu Next Gen Technologies",
  description:
    "Send an enquiry or request a callback. Get a quote for web development, app development, DSC, or logo design. Based in Raipur, Chhattisgarh.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-lu-text mb-4">Get in Touch</h1>
          <p className="text-lu-muted text-lg max-w-xl mx-auto">
            Fill in the form below and our team will respond within 24 hours with a detailed quote and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column — info */}
          <div className="flex flex-col gap-6">
            {/* Contact info cards */}
            <div className="bg-white border border-lu-border rounded-2xl p-6 flex flex-col gap-5">
              <h2 className="font-semibold text-lu-text">Contact Information</h2>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-lu-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-lu-muted mb-0.5">Email</p>
                  <a
                    href="mailto:contact@1lutechs.com"
                    className="text-sm text-lu-text hover:text-lu-blue transition-colors"
                  >
                    contact@1lutechs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-lu-muted mb-0.5">WhatsApp</p>
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-lu-text hover:text-green-600 transition-colors"
                  >
                    +91-XXXXXXXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-lu-orange" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-lu-muted mb-0.5">Location</p>
                  <p className="text-sm text-lu-text">Raipur, Chhattisgarh, India</p>
                </div>
              </div>
            </div>

            {/* Callback form */}
            <div className="bg-white border border-lu-border rounded-2xl p-6">
              <h2 className="font-semibold text-lu-text mb-1">Prefer a Call?</h2>
              <p className="text-sm text-lu-muted mb-5">
                Request a callback and our expert will guide you step-by-step through DSC setup or your web/app project.
              </p>
              <CallbackForm />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-semibold text-white transition-opacity hover:opacity-90 text-sm"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Right column — enquiry form */}
          <div className="lg:col-span-2 bg-white border border-lu-border rounded-2xl p-6 md:p-8">
            <h2 className="font-semibold text-lu-text text-lg mb-1">Send an Enquiry</h2>
            <p className="text-sm text-lu-muted mb-6">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
