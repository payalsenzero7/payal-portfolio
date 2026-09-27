import { contact, personalInfo } from '../../data/portfolio';
import { Magnetic } from '../ui/Magnetic';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  return (
    <section id="contact" className="section-pad wrap">
      <Reveal>
        <div className="relative flex flex-wrap items-center justify-between gap-10 overflow-hidden rounded-[20px] border border-line bg-linear-to-b from-surface to-surface-2 px-14 py-16">
          <h2 className="max-w-[14ch] text-[clamp(1.5rem,3vw,2.2rem)]">{contact.heading}</h2>

          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                {contact.emailLabel}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {contact.linkedinLabel}
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
