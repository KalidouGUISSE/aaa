import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Eye, Target, Heart } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    { key: 'quran', icon: '📖' },
    { key: 'education', icon: '🎓' },
    { key: 'fraternity', icon: '🤝' },
    { key: 'solidarity', icon: '💪' },
    { key: 'sharing', icon: '🌟' },
  ];

  const sections = [
    {
      icon: BookOpen,
      title: t('about.origin.title'),
      text: t('about.origin.text'),
    },
    {
      icon: Eye,
      title: t('about.vision.title'),
      text: t('about.vision.text'),
    },
    {
      icon: Target,
      title: t('about.mission.title'),
      text: t('about.mission.text'),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={index}
                  className="card-elevated p-8 md:p-10 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h2 className={`font-heading text-2xl font-semibold text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {section.title}
                      </h2>
                      <p className={`text-muted-foreground leading-relaxed ${language === 'ar' ? 'font-arabic leading-loose' : ''}`}>
                        {section.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className={`font-heading text-3xl md:text-4xl font-semibold text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('about.values.title')}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-elevated px-6 py-4 flex items-center gap-3 hover:shadow-elevated transition-shadow"
              >
                <span className="text-2xl">{value.icon}</span>
                <span className={`font-medium text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t(`about.values.${value.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
