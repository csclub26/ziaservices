import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">zia sociale</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footerTagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('quickLinks')}</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('about')}
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('services')}
              </Link>
              <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('testimonials')}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('contact')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('ourServices')}</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/services/handicapped-care" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('handicappedCare')}
              </Link>
              <Link to="/services/babysitting" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('babysitting')}
              </Link>
              <Link to="/services/elderly-care" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('elderlyCare')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('contactUs')}</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:Ziasvice966@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                Ziasvice966@gmail.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
               +212 0621182826
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Kenitra,Morocco.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {currentYear} zia sociale. {t('allRightsReserved')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
