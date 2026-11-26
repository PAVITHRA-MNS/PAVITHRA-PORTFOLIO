import { FormEvent, useState } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { PROFILE_CONFIG } from '../data/portfolioData';

type SubmitState = 'idle' | 'submitting' | 'submitted-netlify' | 'email-fallback' | 'error';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const buildMailtoHref = () => {
    const mailSubject = encodeURIComponent(
      subject.trim() || `AI Engineering Opportunity — Message from ${name.trim() || 'Recruiter'}`
    );
    const mailBody = encodeURIComponent(
      `Hi Pavithra,\n\n${message.trim()}\n\nBest regards,\n${name.trim()}${
        company.trim() ? `\n${company.trim()}` : ''
      }${email.trim() ? `\n${email.trim()}` : ''}`
    );
    return `mailto:${PROFILE_CONFIG.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const hostname = window.location.hostname;
    const isLocalOrPreview =
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.endsWith('.run.app') ||
      hostname.endsWith('.web.app');

    // Never pretend a form submitted successfully when not running on Netlify Forms
    if (isLocalOrPreview) {
      setSubmitState('email-fallback');
      return;
    }

    setSubmitState('submitting');
    try {
      const formBody = new URLSearchParams({
        'form-name': 'contact',
        'bot-field': botField,
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        subject: subject.trim(),
        message: message.trim(),
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });

      if (response.ok) {
        setSubmitState('submitted-netlify');
        setName('');
        setEmail('');
        setCompany('');
        setSubject('');
        setMessage('');
      } else {
        setSubmitState('email-fallback');
      }
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section id="contact" className="bg-[#060913]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Details & Links */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-medium tracking-wider text-sky-400 uppercase">
                Contact & Opportunities
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]">
                Let&apos;s Build the Next Generation of Intelligent Systems.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
                I&apos;m interested in opportunities where I can contribute to Agentic AI,
                Generative AI, AI infrastructure and enterprise-scale intelligent systems.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800/85 bg-[#0b1120]/80 px-4 py-3.5">
                  <a
                    href={`mailto:${PROFILE_CONFIG.email}`}
                    className="flex min-w-0 items-center gap-3 text-sm text-slate-200 hover:text-sky-300 transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                    <span className="truncate font-mono text-xs sm:text-sm">
                      {PROFILE_CONFIG.email}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300 hover:border-slate-600 hover:text-white transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone */}
                <a
                  href={PROFILE_CONFIG.phoneHref}
                  className="flex items-center gap-3 rounded-xl border border-slate-800/85 bg-[#0b1120]/80 px-4 py-3.5 text-sm text-slate-200 hover:border-slate-700 hover:text-sky-300 transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                  <span className="font-mono text-xs sm:text-sm tabular-nums">
                    {PROFILE_CONFIG.phone}
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-800/85 bg-[#0b1120]/80 px-4 py-3.5 text-sm text-slate-300">
                  <MapPin className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                  <span>{PROFILE_CONFIG.location}</span>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/75 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-sky-500/50 hover:text-sky-200 transition-colors whitespace-nowrap"
              >
                <Linkedin className="h-4 w-4 text-sky-400" aria-hidden="true" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              </a>

              <a
                href={PROFILE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/75 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-sky-500/50 hover:text-sky-200 transition-colors whitespace-nowrap"
              >
                <Github className="h-4 w-4 text-slate-300" aria-hidden="true" />
                <span>GitHub</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              </a>

              <a
                href={PROFILE_CONFIG.resumePath}
                download="Pavithra_MNS_Resume.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Netlify Forms + Direct Email Client Alternative */}
          <div className="lg:col-span-7">
            <div className="surface-glass rounded-2xl border border-slate-800/90 p-6 sm:p-8">
              <div className="border-b border-slate-800/80 pb-4">
                <h3 className="font-display text-lg font-semibold text-slate-100">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Powered by Netlify Forms in production deployment, with direct email-client
                  dispatch available anytime.
                </p>
              </div>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Do not fill this out if you are human:
                    <input
                      name="bot-field"
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)}
                    />
                  </label>
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Recruiter or Hiring Manager"
                      className="mt-1.5 w-full rounded-lg border border-slate-800 bg-[#070b16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-800 bg-[#070b16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Company / Team
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Organization name"
                      className="mt-1.5 w-full rounded-lg border border-slate-800 bg-[#070b16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Role or Inquiry Topic
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Agentic AI Engineer / GenAI Platform"
                      className="mt-1.5 w-full rounded-lg border border-slate-800 bg-[#070b16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share details about the role, team, or AI architecture challenge..."
                    className="mt-1.5 w-full rounded-lg border border-slate-800 bg-[#070b16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                  />
                </div>

                {/* Honest Submission Feedback */}
                {submitState === 'submitted-netlify' && (
                  <div
                    role="status"
                    className="rounded-lg border border-cyan-500/40 bg-cyan-950/30 p-3.5 text-xs text-cyan-200"
                  >
                    Thank you! Your message has been submitted via Netlify Forms. Pavithra will
                    respond promptly.
                  </div>
                )}

                {(submitState === 'email-fallback' || submitState === 'error') && (
                  <div
                    role="status"
                    className="flex flex-col gap-3 rounded-lg border border-sky-500/40 bg-sky-950/30 p-4 text-xs text-slate-200 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="leading-relaxed">
                      Netlify Forms handles submissions when hosted on Netlify. In this preview
                      environment, send your drafted message directly via your email client:
                    </p>
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex min-h-[38px] items-center gap-2 self-start rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-medium text-white hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Send via Email App</span>
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-60 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>{submitState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <a
                    href={buildMailtoHref()}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-600 hover:text-white transition-colors whitespace-nowrap"
                  >
                    <Mail className="h-4 w-4 text-sky-400" aria-hidden="true" />
                    <span>Open Email Client</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
