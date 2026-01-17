import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Package, Coins, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Support = () => {
  const { t, language, isRTL } = useLanguage();

  const supportTypes = [
    {
      icon: Users,
      title: t('support.moral.title'),
      description: t('support.moral.text'),
    },
    {
      icon: Package,
      title: t('support.material.title'),
      description: t('support.material.text'),
    },
    {
      icon: Coins,
      title: t('support.financial.title'),
      description: t('support.financial.text'),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-gold mx-auto mb-6" />
          <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('support.title')}
          </h1>
          <p className={`text-lg text-primary-foreground/85 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('support.intro')}
          </p>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('support.why.title')}
            </h2>
            <p className={`text-lg text-muted-foreground leading-relaxed ${language === 'ar' ? 'font-arabic leading-loose' : ''}`}>
              {t('support.why.text')}
            </p>
          </div>

          {/* Support Types */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto ${isRTL ? 'direction-rtl' : ''}`}>
            {supportTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="card-elevated p-8 text-center group hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className={`font-heading text-xl font-semibold text-foreground mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {type.title}
                  </h3>
                  <p className={`text-muted-foreground ${language === 'ar' ? 'font-arabic leading-loose' : ''}`}>
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-10 py-6 text-base"
            >
              <a
                href="https://wa.me/221771724547"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {t('support.contact')}
              </a>
            </Button>
            <p className="mt-6 text-muted-foreground">
              +221 77 172 45 47
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
