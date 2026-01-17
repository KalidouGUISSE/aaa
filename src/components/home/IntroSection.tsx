import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen } from 'lucide-react';

const IntroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className={`font-heading text-3xl md:text-4xl font-semibold text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('intro.title')}
          </h2>
          
          <p className={`text-lg text-muted-foreground leading-relaxed ${language === 'ar' ? 'font-arabic leading-loose' : ''}`}>
            {t('intro.description')}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-16 bg-border" />
            <span className="text-gold text-2xl">✧</span>
            <div className="h-px w-16 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
