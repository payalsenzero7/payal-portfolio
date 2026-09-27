import { certifications, education, personalInfo } from '../../data/portfolio';
import { Reveal } from '../ui/Reveal';
import { SkillIcon } from '../ui/SkillIcon';
import { GraduationCap, Languages as LanguagesIcon } from 'lucide-react';

export function Credentials() {
  return (
    <section id="credentials" className="section-pad wrap">
      <Reveal>
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)]">Education &amp; credentials</h2>
          <p className="max-w-[38ch] text-[0.95rem]">Where the analytics background came from.</p>
        </div>

        <div className="grid gap-[18px] md:grid-cols-[1.35fr_1fr]">
          {/* Education */}
          <div className="rounded-[14px] border border-line bg-surface p-6">
            <h3 className="mb-5 flex items-center gap-2 font-display text-[0.92rem] font-semibold text-accent-2">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Education
            </h3>

            <ol className="flex flex-col gap-4">
              {education.map((entry) => (
                <li key={entry.id} className="border-t border-line pt-4 first:border-0 first:pt-0">
                  <p className="font-display text-[0.95rem] font-semibold text-ink">{entry.qualification}</p>
                  <p className="mt-0.5 text-[0.88rem] text-accent-2">{entry.institution}</p>
                  <p className="mt-1 font-mono text-[0.76rem] text-muted">
                    {entry.period} &middot; {entry.location}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-[18px]">
            {/* Certifications */}
            <div className="rounded-[14px] border border-line bg-surface p-6">
              <h3 className="mb-4 flex items-center gap-2 font-display text-[0.92rem] font-semibold text-accent-2">
                <SkillIcon name="medal" className="h-4 w-4" />
                Certifications
              </h3>

              <ul className="flex flex-col gap-3.5">
                {certifications.map((cert) => (
                  <li key={cert.id} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-ink">
                      <SkillIcon name={cert.icon} className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.88rem] font-medium text-ink">{cert.title}</span>
                      <span className="font-mono text-[0.74rem] text-muted">{cert.issuer}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="rounded-[14px] border border-line bg-surface p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-[0.92rem] font-semibold text-accent-2">
                <LanguagesIcon className="h-4 w-4" aria-hidden="true" />
                Languages
              </h3>
              <p className="text-[0.9rem] text-muted">{personalInfo.languages}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
