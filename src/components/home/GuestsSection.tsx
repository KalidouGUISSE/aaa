import { useLanguage } from '@/contexts/LanguageContext';
import { User, Crown, Star, BookHeart } from 'lucide-react';

const GuestsSection = () => {
  const { t, isRTL, language } = useLanguage();

  const guests = [
    {
      role: t('guests.organizer'),
      name: "Aboul Abass At'Tijani",
      image: '/asset/organisateur.jpeg',
      icon: User,
    },
    {
      role: t('guests.patron'),
      name: 'Bachir Al-Badri',
      image: '/asset/Parrain.png',
      icon: Crown,
    },
    {
      role: t('guests.honor'),
      name: 'Chérif Boubacar Aidara',
      image: '/asset/invite d\'honnneur.png',
      icon: Star,
    },
    {
      role: t('guests.supervision'),
      name: 'Dahiratoul Houla de Oustaz Ahmad Ba',
      image: '/asset/invite.png',
      icon: BookHeart,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`font-heading text-3xl md:text-4xl font-semibold text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('guests.title')}
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isRTL ? 'direction-rtl' : ''}`}>
          {guests.map((guest, index) => {
            const IconComponent = guest.icon;
            return (
              <div
                key={index}
                className="card-elevated p-6 text-center group hover:shadow-elevated transition-all duration-300"
              >
                {/* Photo */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img
                    src={guest.image}
                    alt={`${guest.name} - ${guest.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Role */}
                <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                  {guest.role}
                </p>
                
                {/* Name */}
                <h3 className={`font-heading text-lg font-semibold text-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {guest.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
