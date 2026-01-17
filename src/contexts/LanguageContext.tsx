import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.program': 'Programme',
    'nav.support': 'Soutenir',
    'nav.location': 'Lieu',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.edition': '10ème Édition',
    'hero.title': 'NDAANAAN DAY',
    'hero.subtitle': 'MOKKAL AL QUR\'ANE',
    'hero.description': 'Compétition coranique annuelle organisée durant le mois sacré de Ramadan, réunissant 20 daaras pour promouvoir l\'amour du Saint Coran.',
    'hero.date': 'Samedi 7 Mars 2026 • 11h00',
    'hero.location': 'Thiès – Quartier Mbour 2',
    'hero.support': 'Soutenir l\'événement',
    'hero.program': 'Voir le programme',
    
    // Countdown
    'countdown.title': 'Compte à rebours',
    'countdown.days': 'Jours',
    'countdown.hours': 'Heures',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Secondes',
    
    // Key Numbers
    'numbers.title': 'En chiffres',
    'numbers.edition': 'Éditions',
    'numbers.daaras': 'Daaras participants',
    'numbers.finalists': 'Finalistes',
    'numbers.prize': 'FCFA de prix',
    
    // Introduction
    'intro.title': 'Qu\'est-ce que NDAANAAN DAY ?',
    'intro.description': 'NDAANAAN DAY – MOKKAL AL QUR\'ANE est une compétition coranique annuelle organisée durant le mois sacré de Ramadan. Elle rassemble 20 daaras pour promouvoir l\'amour du Saint Coran, l\'excellence dans son apprentissage et la fraternité entre écoles coraniques.',
    
    // Guests
    'guests.title': 'Organisation & Invités d\'honneur',
    'guests.organizer': 'Organisateur',
    'guests.patron': 'Parrain',
    'guests.honor': 'Invité d\'honneur',
    'guests.supervision': 'Supervision religieuse',
    
    // Sponsors
    'sponsors.title': 'Nos partenaires',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.organized': 'Organisé par',
    
    // About Page
    'about.title': 'À propos de NDAANAAN DAY',
    'about.origin.title': 'Origine',
    'about.origin.text': 'NDAANAAN DAY est né de la volonté de créer un espace d\'émulation positive entre les écoles coraniques, favorisant l\'excellence dans l\'apprentissage du Saint Coran.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'Devenir le rendez-vous incontournable de la promotion du Coran au Sénégal, en rassemblant chaque année davantage de daaras et en renforçant les liens entre les communautés.',
    'about.mission.title': 'Mission',
    'about.mission.text': 'Promouvoir l\'amour et l\'excellence dans l\'apprentissage du Saint Coran, tout en cultivant la fraternité et la solidarité entre les écoles coraniques.',
    'about.values.title': 'Nos valeurs',
    'about.values.quran': 'Amour du Coran',
    'about.values.education': 'Éducation',
    'about.values.fraternity': 'Fraternité',
    'about.values.solidarity': 'Solidarité',
    'about.values.sharing': 'Partage',
    
    // Program Page
    'program.title': 'Programme de la journée',
    'program.intro': 'Découvrez le déroulement de cette journée exceptionnelle dédiée au Saint Coran.',
    
    // Support Page
    'support.title': 'Soutenir l\'événement',
    'support.intro': 'Votre soutien contribue à la promotion du Saint Coran et à l\'épanouissement de nos jeunes apprenants.',
    'support.why.title': 'Pourquoi nous soutenir ?',
    'support.why.text': 'Chaque contribution, quelle que soit sa forme, participe à la réussite de cet événement et au bien-être des daaras participants.',
    'support.moral.title': 'Soutien moral',
    'support.moral.text': 'Votre présence, vos prières et la promotion de l\'événement autour de vous.',
    'support.material.title': 'Soutien matériel',
    'support.material.text': 'Équipements, logistique, fournitures pour les daaras et l\'organisation.',
    'support.financial.title': 'Soutien financier',
    'support.financial.text': 'Contributions aux prix et au soutien des daaras participantes.',
    'support.contact': 'Nous contacter via WhatsApp',
    
    // Location Page
    'location.title': 'Lieu de l\'événement',
    'location.address': 'Thiès – Quartier Mbour 2, Route du CEM',
    'location.directions': 'Obtenir l\'itinéraire',
    
    // Contact Page
    'contact.title': 'Nous contacter',
    'contact.phone': 'Téléphone / WhatsApp',
    'contact.social': 'Réseaux sociaux',
    'contact.community': 'Rejoignez notre communauté',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.program': 'البرنامج',
    'nav.support': 'الدعم',
    'nav.location': 'الموقع',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.edition': 'الطبعة العاشرة',
    'hero.title': 'يوم ندعانان',
    'hero.subtitle': 'موكال القرآن',
    'hero.description': 'مسابقة قرآنية سنوية تُنظَّم خلال شهر رمضان المبارك، تجمع 20 دارة لتعزيز حب القرآن الكريم.',
    'hero.date': 'السبت 7 مارس 2026 • الساعة 11:00',
    'hero.location': 'تياس – حي مبور 2',
    'hero.support': 'دعم الحدث',
    'hero.program': 'عرض البرنامج',
    
    // Countdown
    'countdown.title': 'العد التنازلي',
    'countdown.days': 'أيام',
    'countdown.hours': 'ساعات',
    'countdown.minutes': 'دقائق',
    'countdown.seconds': 'ثوانٍ',
    
    // Key Numbers
    'numbers.title': 'بالأرقام',
    'numbers.edition': 'طبعات',
    'numbers.daaras': 'دارة مشاركة',
    'numbers.finalists': 'متأهلين للنهائي',
    'numbers.prize': 'فرنك جائزة',
    
    // Introduction
    'intro.title': 'ما هو يوم ندعانان؟',
    'intro.description': 'يوم ندعانان – موكال القرآن هو مسابقة قرآنية سنوية تُنظَّم خلال شهر رمضان المبارك. تجمع 20 دارة لتعزيز حب القرآن الكريم والتميز في تعلمه والأخوة بين المدارس القرآنية.',
    
    // Guests
    'guests.title': 'التنظيم وضيوف الشرف',
    'guests.organizer': 'المنظم',
    'guests.patron': 'الراعي',
    'guests.honor': 'ضيف الشرف',
    'guests.supervision': 'الإشراف الديني',
    
    // Sponsors
    'sponsors.title': 'شركاؤنا',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.organized': 'من تنظيم',
    
    // About Page
    'about.title': 'عن يوم ندعانان',
    'about.origin.title': 'الأصل',
    'about.origin.text': 'وُلد يوم ندعانان من الرغبة في خلق مساحة للتنافس الإيجابي بين المدارس القرآنية، لتعزيز التميز في تعلم القرآن الكريم.',
    'about.vision.title': 'الرؤية',
    'about.vision.text': 'أن نصبح الموعد الأساسي لترويج القرآن في السنغال، بجمع المزيد من الدارات كل عام وتعزيز الروابط بين المجتمعات.',
    'about.mission.title': 'المهمة',
    'about.mission.text': 'تعزيز حب القرآن الكريم والتميز في تعلمه، مع تنمية الأخوة والتضامن بين المدارس القرآنية.',
    'about.values.title': 'قيمنا',
    'about.values.quran': 'حب القرآن',
    'about.values.education': 'التعليم',
    'about.values.fraternity': 'الأخوة',
    'about.values.solidarity': 'التضامن',
    'about.values.sharing': 'المشاركة',
    
    // Program Page
    'program.title': 'برنامج اليوم',
    'program.intro': 'اكتشف سير هذا اليوم الاستثنائي المكرس للقرآن الكريم.',
    
    // Support Page
    'support.title': 'دعم الحدث',
    'support.intro': 'دعمكم يساهم في ترويج القرآن الكريم وازدهار طلابنا الشباب.',
    'support.why.title': 'لماذا تدعموننا؟',
    'support.why.text': 'كل مساهمة، بأي شكل كانت، تشارك في نجاح هذا الحدث ورفاهية الدارات المشاركة.',
    'support.moral.title': 'الدعم المعنوي',
    'support.moral.text': 'حضوركم ودعواتكم وترويج الحدث من حولكم.',
    'support.material.title': 'الدعم المادي',
    'support.material.text': 'المعدات واللوجستيات والمستلزمات للدارات والتنظيم.',
    'support.financial.title': 'الدعم المالي',
    'support.financial.text': 'المساهمات في الجوائز ودعم الدارات المشاركة.',
    'support.contact': 'تواصلوا معنا عبر واتساب',
    
    // Location Page
    'location.title': 'موقع الحدث',
    'location.address': 'تياس – حي مبور 2، طريق CEM',
    'location.directions': 'الحصول على الاتجاهات',
    
    // Contact Page
    'contact.title': 'اتصلوا بنا',
    'contact.phone': 'الهاتف / واتساب',
    'contact.social': 'شبكات التواصل',
    'contact.community': 'انضموا إلى مجتمعنا',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
