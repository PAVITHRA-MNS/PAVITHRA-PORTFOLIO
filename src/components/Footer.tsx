import { PROFILE_CONFIG } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#050811]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display font-medium text-slate-200">
            {PROFILE_CONFIG.name} — {PROFILE_CONFIG.role}
          </p>
          <p className="mt-0.5 text-slate-500">
            {PROFILE_CONFIG.location} · © {year} {PROFILE_CONFIG.name}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5">
          <a href="#about" className="hover:text-slate-200 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-slate-200 transition-colors">
            Projects
          </a>
          <a href="#architecture" className="hover:text-slate-200 transition-colors">
            Architecture
          </a>
          <a
            href={PROFILE_CONFIG.resumePath}
            download="Pavithra_MNS_Resume.pdf"
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            Resume PDF
          </a>
          <a href={`mailto:${PROFILE_CONFIG.email}`} className="hover:text-slate-200 transition-colors">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
