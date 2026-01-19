import { useLanguage } from '@/contexts/LanguageContext';

const KeyNumbersSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: '10', label: t('numbers.edition'), suffix: '' },
    { value: '25', label: t('numbers.daaras'), suffix: '' },
    { value: '4', label: t('numbers.finalists'), suffix: '' },
    { value: '2M', label: t('numbers.prize'), suffix: '' },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          {t('numbers.title')}
        </h2>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${isRTL ? 'direction-rtl' : ''}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-elevated p-6 md:p-8 text-center group hover:scale-[1.02] transition-transform"
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {stat.value}
                {stat.suffix && <span className="text-gold">{stat.suffix}</span>}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyNumbersSection;
