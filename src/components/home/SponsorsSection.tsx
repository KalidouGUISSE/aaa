import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

const SponsorsSection = () => {
  const { t, language } = useLanguage();

  const sponsors = [
    { name: "NDAANAAN FAYDOU", image: null },
    { name: "Groupe Je M'Engage pour les NDAANAAN", image: null },
    { name: "Al Badri", image: "/asset/Parrain.png" },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`font-heading text-3xl md:text-4xl font-semibold text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('sponsors.title')}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="card-elevated px-8 py-6 flex items-center gap-3 hover:shadow-elevated transition-shadow"
            >
              {sponsor.image ? (
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                  loading="lazy"
                />
              ) : (
                <Heart className="w-5 h-5 text-gold" />
              )}
              <span className="font-medium text-foreground">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
