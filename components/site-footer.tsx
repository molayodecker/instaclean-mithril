import Link from "next/link";
import {
  APP_LINK,
  CLEANER_HELP,
  EMAIL,
  LOGO,
  SUPPORT_DISPLAY,
  SUPPORT_TEL,
  WHATSAPP,
  WHATSAPP_DISPLAY,
} from "@/lib/content";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href="/" aria-label="Instaclean home" className="inline-block">
              <img src={LOGO} alt="Instaclean" width={150} height={36} className="h-9 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-mist">
              Better homes. Better work. Better opportunities. Home services, workforce management and Pay2own, starting in Ghana.
            </p>
            <a
              href={APP_LINK}
              className="mt-6 inline-block font-semibold text-white underline decoration-yellow decoration-2 underline-offset-[6px] hover:decoration-white"
            >
              Get the Instaclean app
            </a>
          </div>
          <nav aria-label="For customers" className="lg:col-span-2">
            <p className="text-sm font-bold">For customers</p>
            <ul className="mt-5 space-y-3">
              <li><Link className="text-mist hover:text-white" href="/services">Services</Link></li>
              <li><Link className="text-mist hover:text-white" href="/book-a-service">Book now</Link></li>
              <li><Link className="text-mist hover:text-white" href="/manage">Instaclean Manage</Link></li>
              <li><Link className="text-mist hover:text-white" href="/testimonials">Testimonials</Link></li>
              <li><Link className="text-mist hover:text-white" href="/faq">FAQ</Link></li>
            </ul>
          </nav>
          <nav aria-label="Company" className="lg:col-span-2">
            <p className="text-sm font-bold">Company</p>
            <ul className="mt-5 space-y-3">
              <li><Link className="text-mist hover:text-white" href="/about">About</Link></li>
              <li><Link className="text-mist hover:text-white" href="/vision">Our Vision</Link></li>
              <li><Link className="text-mist hover:text-white" href="/how-we-verify">How we verify</Link></li>
              <li><Link className="text-mist hover:text-white" href="/business">For business</Link></li>
              <li><Link className="text-mist hover:text-white" href="/household-staffing">Household staffing</Link></li>
              <li><Link className="text-mist hover:text-white" href="/careers">Careers</Link></li>
              <li><Link className="text-mist hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="For professionals" className="lg:col-span-2">
            <p className="text-sm font-bold">For professionals</p>
            <ul className="mt-5 space-y-3">
              <li><Link className="text-mist hover:text-white" href="/join-as-cleaner">Join our platform</Link></li>
              <li><Link className="text-mist hover:text-white" href="/pay2own">Pay2own</Link></li>
              <li><a className="text-mist hover:text-white" href={CLEANER_HELP}>Resources</a></li>
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <p className="text-sm font-bold">Contact</p>
            <ul className="mt-5 space-y-3 text-mist">
              <li>
                Support <a className="text-white hover:underline" href={`tel:${SUPPORT_TEL}`}>{SUPPORT_DISPLAY}</a>
              </li>
              <li>
                WhatsApp, automated <a className="text-white hover:underline" href={WHATSAPP}>{WHATSAPP_DISPLAY}</a>
              </li>
              <li>
                <a className="text-white hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>Accra, Ghana</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-mist">© 2026 Instaclean. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a className="text-mist hover:text-white" href="https://help.tryinstaclean.com/help/category/legal/privacy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-mist hover:text-white" href="https://help.tryinstaclean.com/help/legal/terms">
                Terms of Service
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Instaclean on social media">
            <li><a className="text-mist hover:text-white" href="https://facebook.com">Facebook</a></li>
            <li><a className="text-mist hover:text-white" href="https://instagram.com/instacleanappafrica">Instagram</a></li>
            <li><a className="text-mist hover:text-white" href="https://x.com/instacleanappaf">X</a></li>
            <li><a className="text-mist hover:text-white" href="https://tiktok.com/@instacleanappafrica">TikTok</a></li>
            <li><a className="text-mist hover:text-white" href="https://youtube.com/@instacleanAppAfrica">YouTube</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
