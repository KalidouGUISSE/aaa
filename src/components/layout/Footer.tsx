import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/program', label: t('nav.program') },
    { path: '/support', label: t('nav.support') },
    { path: '/location', label: t('nav.location') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/asset/logo.jpeg"
                alt="NDAANAAN DAY Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary-foreground/20"
              />
              <div>
                <p className="font-heading text-xl font-semibold">NDAANAAN DAY</p>
                <p className="text-sm text-primary-foreground/70">MOKKAL AL QUR'ANE</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t('nav.contact')}</h4>
            <div className="space-y-3">
              <a
                href="tel:+221771724547"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+221 77 172 45 47</span>
              </a>
              <a
                href="https://wa.me/221771724547"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="/asset/organisateur.jpeg"
                alt="Aboul Abass At'Tijani - Organisateur"
                className="w-8 h-8 rounded-full object-cover border border-primary-foreground/20"
              />
              <p className="text-xs text-primary-foreground/60">
                {t('footer.organized')}: Aboul Abass At'Tijani
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2026 NDAANAAN DAY. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
