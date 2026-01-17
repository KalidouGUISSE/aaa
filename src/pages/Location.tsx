import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  const { t, language } = useLanguage();

  const address = "Thiès – Quartier Mbour 2, Route du CEM, Senegal";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30942.089461168367!2d-16.935!3d14.790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe1f5f5f5f5f5f5f%3A0x0!2sThi%C3%A8s%2C%20Senegal!5e0!3m2!1sfr!2sfr!4v1600000000000!5m2!1sfr!2sfr";

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-12 h-12 text-gold mx-auto mb-6" />
          <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('location.title')}
          </h1>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Address Card */}
            <div className="card-elevated p-8 mb-8 text-center">
              <div className="flex items-center justify-center gap-3 text-foreground mb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <p className={`text-lg font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t('location.address')}
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-emerald-light text-primary-foreground"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  {t('location.directions')}
                </a>
              </Button>
            </div>

            {/* Map Embed */}
            <div className="card-elevated overflow-hidden aspect-video">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
