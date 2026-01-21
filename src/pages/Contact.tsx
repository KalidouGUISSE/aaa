import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MessageCircle, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const { t, language, isRTL } = useLanguage();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/175JA5RUuy', color: 'hover:bg-[#1877F2]' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/221771724547', color: 'hover:bg-[#25D366]' },
    { name: 'TikTok', icon: () => <span className="text-lg font-bold">T</span>, url: 'https://www.tiktok.com/@ndaanaan_faydou_sprituel?_r=1&_t=ZS-93FDf9cvPd7', color: 'hover:bg-black' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@ndaanaan-faydou?si=FulNAN55XqcTmCay', color: 'hover:bg-[#FF0000]' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('contact.title')}
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-12">
            {/* Phone */}
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className={`font-heading text-xl font-semibold text-foreground mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('contact.phone')}
              </h2>
              <a
                href="tel:+221771724547"
                className="text-2xl font-heading font-bold text-primary hover:text-emerald-light transition-colors"
              >
                +221 77 172 45 47
              </a>
            </div>

            {/* Social Media */}
            <div className="card-elevated p-8 text-center">
              <h2 className={`font-heading text-xl font-semibold text-foreground mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('contact.social')}
              </h2>
              <div className={`flex justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition-all duration-300`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
              <p className={`mt-8 text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('contact.community')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
