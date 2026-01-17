import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';

const HeroSection = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden islamic-pattern">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Edition Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse-soft" />
            {t('hero.edition')}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight">
              {t('hero.title')}
            </h1>
            <p className={`font-heading text-2xl md:text-3xl lg:text-4xl text-gold-light font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('hero.description')}
          </p>

          {/* Event Details */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-primary-foreground/90 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-sm md:text-base">{t('hero.date')}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-sm md:text-base">{t('hero.location')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-base"
            >
              <Link to="/support">
                {t('hero.support')}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 px-8 py-6 text-base"
            >
              <Link to="/program">
                {t('hero.program')}
              </Link>
            </Button>
          </div>

          {/* Countdown */}
          <div className="pt-8">
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
