import { Award, GraduationCap } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export default function CredentialsSection() {
  return (
    <section id="certifications" className="border-b border-slate-800/70 bg-[#070b16]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium tracking-wider text-sky-400 uppercase">
            Credentials & Academic Foundation
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]">
            Certifications & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Certifications */}
          <div className="surface-glass rounded-2xl border border-slate-800/90 p-6 sm:p-7 lg:col-span-6">
            <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-sky-400">
                <Award className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-100">
                Industry Certifications
              </h3>
            </div>

            <div className="mt-5 space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl border border-slate-800/85 bg-[#070b16] p-4"
                >
                  <p className="font-mono text-[11px] text-sky-400">{cert.issuer}</p>
                  <h4 className="mt-1 font-display text-base font-semibold text-slate-100">
                    {cert.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{cert.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="surface-glass flex flex-col justify-between rounded-2xl border border-slate-800/90 p-6 sm:p-7 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-cyan-400">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-100">Education</h3>
              </div>

              <div className="mt-5 rounded-xl border border-slate-800/85 bg-[#070b16] p-5">
                <p className="font-mono text-xs text-cyan-300">{EDUCATION.period}</p>
                <h4 className="mt-1.5 font-display text-lg font-semibold text-slate-50">
                  {EDUCATION.institution}
                </h4>
                <p className="mt-1.5 text-sm font-medium text-slate-300">{EDUCATION.degree}</p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <span className="text-xs text-slate-400">Cumulative GPA</span>
                  <span className="font-mono text-lg font-semibold text-slate-50 tabular-nums">
                    {EDUCATION.cgpa} / 10.0
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-slate-400">
              Grounded in core computer science fundamentals—algorithms, distributed systems,
              operating systems, and software engineering—applied daily in enterprise AI and
              cloud architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
