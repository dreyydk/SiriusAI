import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="h-6 w-6" />
            <div className="font-medium">SiriusAI | Your SEO Partner</div>
          </div>
          <nav className="flex flex-col gap-5 lg:flex-1 lg:flex-row lg:justify-center lg:gap-7">
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Features
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Company
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 transition hover:text-white" />
            <InstaSocial className="text-white/40 transition hover:text-white" />
            <YTSocial className="text-white/40 transition hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};
