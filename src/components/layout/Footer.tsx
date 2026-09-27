import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { personalInfo, socialLinks } from '../../data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, React.ReactNode> = {
    Github: <GithubIcon className="w-5 h-5" />,
    Linkedin: <LinkedinIcon className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />,
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
            <span>&copy; {currentYear} {personalInfo.name}. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all"
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
