import { contact, personalInfo } from '../../data/portfolio';
import { Magnetic } from '../ui/Magnetic';
import { Reveal } from '../ui/Reveal';
import { BrandBadge } from '../ui/SkillIcon';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-pad wrap">
      <Reveal>
        <div className="relative flex flex-wrap items-center justify-between gap-10 overflow-hidden rounded-[20px] border border-line bg-linear-to-b from-surface to-surface-2 px-6.5 py-10 md:px-14 md:py-16">
          <div>
            <h2 className="max-w-[14ch] text-[clamp(1.5rem,3vw,2.2rem)]">{contact.heading}</h2>
            <p className="mt-3 font-mono text-[0.82rem] text-muted">{personalInfo.location}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                <Mail className="mr-1.5 inline-block h-4 w-4 align-[-3px]" aria-hidden="true" />
                {contact.emailLabel}
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`tel:${personalInfo.phoneHref}`} className="btn btn-ghost">
                <Phone className="mr-1.5 inline-block h-4 w-4 align-[-3px]" aria-hidden="true" />
                {personalInfo.phone}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <BrandBadge name="linkedin" className="mr-1.5 inline-block h-4 w-4 align-[-3px]" />
                {contact.linkedinLabel}
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
