import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock } from 'lucide-react';

const Program = () => {
  const { t, language, isRTL } = useLanguage();

  const scheduleItems = [
    { time: '11:00', title: 'Accueil et ouverture', titleAr: 'الاستقبال والافتتاح' },
    { time: '11:30', title: 'Récitation du Saint Coran', titleAr: 'تلاوة القرآن الكريم' },
    { time: '12:00', title: 'Début des épreuves de compétition', titleAr: 'بداية مراحل المسابقة' },
    { time: '14:00', title: 'Pause et prière du Dhuhr', titleAr: 'استراحة وصلاة الظهر' },
    { time: '14:30', title: 'Reprise des épreuves', titleAr: 'استئناف المسابقة' },
    { time: '16:00', title: 'Sélection des finalistes', titleAr: 'اختيار المتأهلين للنهائي' },
    { time: '16:30', title: 'Interventions religieuses', titleAr: 'المداخلات الدينية' },
    { time: '17:30', title: 'Cérémonie de remise des prix', titleAr: 'حفل توزيع الجوائز' },
    { time: '18:00', title: 'Prières de clôture', titleAr: 'أدعية الختام' },
    { time: '19:00', title: 'rupture du jeûne', titleAr: 'يفطر'},
    { time: '20:00', title: 'Dinner', titleAr: 'عشاء'},
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary islamic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('program.title')}
          </h1>
          <p className={`text-lg text-primary-foreground/85 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('program.intro')}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute top-0 bottom-0 w-0.5 bg-border ${isRTL ? 'right-[23px] md:right-1/2 md:translate-x-1/2' : 'left-[23px] md:left-1/2 md:-translate-x-1/2'}`} />

              {/* Timeline Items */}
              <div className="space-y-8">
                {scheduleItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 md:gap-0 ${isRTL ? 'flex-row-reverse' : ''} ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Time Badge */}
                    <div className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? (isRTL ? 'justify-start pl-8' : 'justify-end pr-8') : (isRTL ? 'justify-end pr-8' : 'justify-start pl-8')}`}>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold bg-gold/10 px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-elegant flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-sm">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? (isRTL ? 'md:pr-8' : 'md:pl-8') : (isRTL ? 'md:pl-8' : 'md:pr-8')}`}>
                      <div className="card-elevated p-5">
                        {/* Mobile Time */}
                        <div className="flex items-center gap-2 text-xs font-semibold text-gold mb-2 md:hidden">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </div>
                        <h3 className={`font-heading text-lg font-semibold text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {language === 'ar' ? item.titleAr : item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Program;
