import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'My Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    
    // Home Page
    heroTitle: 'Compassionate Care for Your Loved Ones',
    heroSubtitle: 'Professional caregiving services with heart and dedication',
    exploreServices: 'Explore Our Services',
    contactUs: 'Contact Us',
    whyChooseUs: 'Why Choose Us',
    compassionateCare: 'Compassionate Care',
    compassionateCareDesc: 'We treat every client with dignity, respect, and genuine care',
    experiencedTeam: 'Experienced Team',
    experiencedTeamDesc: 'Certified professionals with years of caregiving experience',
    flexibleSchedule: '24/7 Availability',
    flexibleScheduleDesc: 'Flexible scheduling to meet your unique needs',
    certifiedProfessionals: 'Licensed & Insured',
    certifiedProfessionalsDesc: 'All caregivers are thoroughly vetted and certified',
    readyToStart: 'Ready to Get Started?',
    readyToStartDesc: 'Contact us today to discuss how we can help your loved ones',
    getInTouch: 'Get In Touch',
    
    // Services
    ourServices: 'Our Services',
    servicesHeroDesc: 'Comprehensive care solutions tailored to your needs',
    handicappedCare: 'Handicapped Care',
    handicappedCareDesc: 'Specialized support for individuals with disabilities',
    handicappedCareFullDesc: 'Dedicated care and support for individuals with physical and developmental disabilities',
    babysitting: 'Professional Babysitting',
    babysittingDesc: 'Safe, nurturing childcare services you can trust',
    babysittingFullDesc: 'Trusted and loving childcare services for children of all ages',
    elderlyCare: 'Elderly Care',
    elderlyCareDesc: 'Compassionate support for seniors',
    elderlyCareFullDesc: 'Respectful and compassionate care for your elderly loved ones',
    learnMore: 'Learn More',
    whatWeOffer: 'What We Offer',
    enrollNow: 'Interested in Our Services?',
    enrollNowDesc: 'Fill out our enrollment form to get started or request more information',
    enrollWithMe: 'Enroll with Me',
    
    // Service Features
    handicappedFeature1: 'Personal care assistance (bathing, dressing, grooming)',
    handicappedFeature2: 'Mobility support and physical therapy assistance',
    handicappedFeature3: 'Medication management and health monitoring',
    handicappedFeature4: 'Companionship and emotional support',
    handicappedFeature5: 'Customized care plans tailored to individual needs',
    
    babysittingFeature1: 'Safe and engaging activities for children',
    babysittingFeature2: 'Homework help and educational support',
    babysittingFeature3: 'Meal preparation and feeding',
    babysittingFeature4: 'Bedtime routines and overnight care available',
    babysittingFeature5: 'CPR and first aid certified caregivers',
    
    elderlyFeature1: 'Daily living assistance (bathing, dressing, meals)',
    elderlyFeature2: 'Medication reminders and health monitoring',
    elderlyFeature3: 'Light housekeeping and meal preparation',
    elderlyFeature4: 'Transportation to appointments',
    elderlyFeature5: 'Social companionship and mental stimulation',
    
    // About Page
    aboutUs: 'About Us',
    aboutHeroDesc: 'Dedicated to providing exceptional care with compassion and professionalism',
    ourMission: 'Our Mission',
    missionDesc: 'To provide compassionate, reliable care that enhances the quality of life for those we serve',
    ourVision: 'Our Vision',
    visionDesc: 'To be the most trusted caregiving service in our community',
    ourValues: 'Our Values',
    valuesDesc: 'Compassion, integrity, respect, and excellence in everything we do',
    ourStory: 'Our Story',
    storyPara1: 'Founded with a passion for helping others, zia sociale has been serving families in our community for over a decade.',
    storyPara2: 'Our team of dedicated caregivers brings years of experience and genuine compassion to every client interaction.',
    storyPara3: 'We believe that everyone deserves to live with dignity, independence, and joy - and we are here to make that possible.',
    
    // Testimonials
    testimonialsHeroDesc: 'Hear from the families we have had the privilege to serve',
    parentTestimonial: 'Parent',
    familyTestimonial: 'Family Member',
    clientTestimonial: 'Client',
    testimonial1: 'The care my daughter receives is exceptional. The team is professional, caring, and truly dedicated.',
    testimonial2: 'Finding quality care for my father was challenging until we found zia sociale. They have been amazing.',
    testimonial3: 'I feel safe and comfortable with my caregiver. They treat me with respect and kindness every day.',
    
    // Contact Page
    contactHeroDesc: 'We would love to hear from you. Reach out to discuss your caregiving needs.',
    sendMessage: 'Send us a Message',
    sendMessageDesc: 'Fill out the form below and we will get back to you as soon as possible',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    emailUs: 'Email Us',
    callUs: 'Call Us',
    visitUs: 'Visit Us',
    messageSent: 'Message Sent!',
    messageSentDesc: 'Thank you for contacting us. We will get back to you soon.',
    
    // Footer
    footerTagline: 'Providing compassionate care with heart and dedication',
    quickLinks: 'Quick Links',
    allRightsReserved: 'All rights reserved.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتي',
    testimonials: 'الشهادات',
    contact: 'اتصل بنا',
    
    // Home Page
    heroTitle: 'رعاية رحيمة لأحبائك',
    heroSubtitle: 'خدمات رعاية محترفة بقلب وتفان',
    exploreServices: 'استكشف خدماتنا',
    contactUs: 'اتصل بنا',
    whyChooseUs: 'لماذا تختارنا',
    compassionateCare: 'رعاية رحيمة',
    compassionateCareDesc: 'نعامل كل عميل بكرامة واحترام ورعاية حقيقية',
    experiencedTeam: 'فريق ذو خبرة',
    experiencedTeamDesc: 'محترفون معتمدون بسنوات من الخبرة في الرعاية',
    flexibleSchedule: 'متاح على مدار الساعة',
    flexibleScheduleDesc: 'جدولة مرنة لتلبية احتياجاتك الفريدة',
    certifiedProfessionals: 'مرخص ومؤمن',
    certifiedProfessionalsDesc: 'جميع مقدمي الرعاية تم فحصهم بدقة وحاصلون على الشهادات',
    readyToStart: 'جاهز للبدء؟',
    readyToStartDesc: 'اتصل بنا اليوم لمناقشة كيف يمكننا مساعدة أحبائك',
    getInTouch: 'ابق على تواصل',
    
    // Services
    ourServices: 'خدماتنا',
    servicesHeroDesc: 'حلول رعاية شاملة مصممة خصيصًا لاحتياجاتك',
    handicappedCare: 'رعاية ذوي الإعاقة',
    handicappedCareDesc: 'دعم متخصص للأفراد ذوي الإعاقة',
    handicappedCareFullDesc: 'رعاية ودعم مخصص للأفراد ذوي الإعاقات الجسدية والتنموية',
    babysitting: 'مجالسة أطفال محترفة',
    babysittingDesc: 'خدمات رعاية أطفال آمنة وراعية يمكنك الوثوق بها',
    babysittingFullDesc: 'خدمات رعاية أطفال موثوقة ومحبة للأطفال من جميع الأعمار',
    elderlyCare: 'رعاية المسنين',
    elderlyCareDesc: 'دعم رحيم لكبار السن',
    elderlyCareFullDesc: 'رعاية محترمة ورحيمة لأحبائك المسنين',
    learnMore: 'اعرف المزيد',
    whatWeOffer: 'ما نقدمه',
    enrollNow: 'مهتم بخدماتنا؟',
    enrollNowDesc: 'املأ نموذج التسجيل للبدء أو طلب المزيد من المعلومات',
    enrollWithMe: 'سجل معي',
    
    // Service Features
    handicappedFeature1: 'مساعدة في الرعاية الشخصية (الاستحمام، اللبس، العناية)',
    handicappedFeature2: 'دعم التنقل والمساعدة في العلاج الطبيعي',
    handicappedFeature3: 'إدارة الأدوية ومراقبة الصحة',
    handicappedFeature4: 'الرفقة والدعم العاطفي',
    handicappedFeature5: 'خطط رعاية مخصصة حسب الاحتياجات الفردية',
    
    babysittingFeature1: 'أنشطة آمنة وجذابة للأطفال',
    babysittingFeature2: 'مساعدة في الواجبات المنزلية والدعم التعليمي',
    babysittingFeature3: 'تحضير الوجبات والإطعام',
    babysittingFeature4: 'روتين وقت النوم ورعاية ليلية متاحة',
    babysittingFeature5: 'مقدمو رعاية معتمدون في الإنعاش القلبي والإسعافات الأولية',
    
    elderlyFeature1: 'مساعدة في الحياة اليومية (الاستحمام، اللبس، الوجبات)',
    elderlyFeature2: 'تذكيرات بالأدوية ومراقبة الصحة',
    elderlyFeature3: 'تنظيف منزلي خفيف وإعداد الوجبات',
    elderlyFeature4: 'النقل إلى المواعيد',
    elderlyFeature5: 'الرفقة الاجتماعية والتحفيز الذهني',
    
    // About Page
    aboutUs: 'من نحن',
    aboutHeroDesc: 'ملتزمون بتقديم رعاية استثنائية بتعاطف واحترافية',
    ourMission: 'مهمتنا',
    missionDesc: 'توفير رعاية رحيمة وموثوقة تعزز جودة الحياة لمن نخدمهم',
    ourVision: 'رؤيتنا',
    visionDesc: 'أن نكون خدمة الرعاية الأكثر موثوقية في مجتمعنا',
    ourValues: 'قيمنا',
    valuesDesc: 'التعاطف والنزاهة والاحترام والتميز في كل ما نقوم به',
    ourStory: 'قصتنا',
    storyPara1: 'تأسست بشغف لمساعدة الآخرين، كانت zia sociale تخدم العائلات في مجتمعنا لأكثر من عقد.',
    storyPara2: 'فريقنا من مقدمي الرعاية المخصصين يجلب سنوات من الخبرة والتعاطف الحقيقي لكل تفاعل مع العملاء.',
    storyPara3: 'نحن نؤمن بأن الجميع يستحق العيش بكرامة واستقلال وفرح - ونحن هنا لجعل ذلك ممكنًا.',
    
    // Testimonials
    testimonialsHeroDesc: 'استمع من العائلات التي كان لنا شرف خدمتها',
    parentTestimonial: 'والد',
    familyTestimonial: 'أحد أفراد الأسرة',
    clientTestimonial: 'عميل',
    testimonial1: 'الرعاية التي تتلقاها ابنتي استثنائية. الفريق محترف ورعاية ومكرس حقًا.',
    testimonial2: 'كان العثور على رعاية جيدة لوالدي تحديًا حتى وجدنا zia sociale. لقد كانوا رائعين.',
    testimonial3: 'أشعر بالأمان والراحة مع مقدم الرعاية الخاص بي. يعاملونني باحترام ولطف كل يوم.',
    
    // Contact Page
    contactHeroDesc: 'نود أن نسمع منك. تواصل معنا لمناقشة احتياجات الرعاية الخاصة بك.',
    sendMessage: 'أرسل لنا رسالة',
    sendMessageDesc: 'املأ النموذج أدناه وسنعود إليك في أقرب وقت ممكن',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    message: 'الرسالة',
    emailUs: 'راسلنا',
    callUs: 'اتصل بنا',
    visitUs: 'زرنا',
    messageSent: 'تم إرسال الرسالة!',
    messageSentDesc: 'شكرًا لتواصلك معنا. سنعود إليك قريبًا.',
    
    // Footer
    footerTagline: 'نقدم رعاية رحيمة بقلب وتفان',
    quickLinks: 'روابط سريعة',
    allRightsReserved: 'جميع الحقوق محفوظة.',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    services: 'Mes Services',
    testimonials: 'Témoignages',
    contact: 'Contact',
    
    // Home Page
    heroTitle: 'Des Soins Compassionnels pour Vos Proches',
    heroSubtitle: 'Services de soins professionnels avec cœur et dévouement',
    exploreServices: 'Explorez Nos Services',
    contactUs: 'Contactez-nous',
    whyChooseUs: 'Pourquoi Nous Choisir',
    compassionateCare: 'Soins Compatissants',
    compassionateCareDesc: 'Nous traitons chaque client avec dignité, respect et soins sincères',
    experiencedTeam: 'Équipe Expérimentée',
    experiencedTeamDesc: 'Professionnels certifiés avec des années d\'expérience en soins',
    flexibleSchedule: 'Disponible 24/7',
    flexibleScheduleDesc: 'Planification flexible pour répondre à vos besoins uniques',
    certifiedProfessionals: 'Licencié et Assuré',
    certifiedProfessionalsDesc: 'Tous les soignants sont soigneusement vérifiés et certifiés',
    readyToStart: 'Prêt à Commencer?',
    readyToStartDesc: 'Contactez-nous aujourd\'hui pour discuter de la façon dont nous pouvons aider vos proches',
    getInTouch: 'Contactez-nous',
    
    // Services
    ourServices: 'Nos Services',
    servicesHeroDesc: 'Solutions de soins complètes adaptées à vos besoins',
    handicappedCare: 'Soins pour Personnes Handicapées',
    handicappedCareDesc: 'Soutien spécialisé pour les personnes handicapées',
    handicappedCareFullDesc: 'Soins et soutien dédiés pour les personnes ayant des handicaps physiques et développementaux',
    babysitting: 'Garde d\'Enfants Professionnelle',
    babysittingDesc: 'Services de garde d\'enfants sûrs et bienveillants en qui vous pouvez avoir confiance',
    babysittingFullDesc: 'Services de garde d\'enfants fiables et aimants pour les enfants de tous âges',
    elderlyCare: 'Soins aux Personnes Âgées',
    elderlyCareDesc: 'Soutien compassionnel pour les seniors',
    elderlyCareFullDesc: 'Soins respectueux et compatissants pour vos proches âgés',
    learnMore: 'En Savoir Plus',
    whatWeOffer: 'Ce Que Nous Offrons',
    enrollNow: 'Intéressé par Nos Services?',
    enrollNowDesc: 'Remplissez notre formulaire d\'inscription pour commencer ou demander plus d\'informations',
    enrollWithMe: 'Inscrivez-vous avec Moi',
    
    // Service Features
    handicappedFeature1: 'Aide aux soins personnels (bain, habillage, toilettage)',
    handicappedFeature2: 'Soutien à la mobilité et aide à la thérapie physique',
    handicappedFeature3: 'Gestion des médicaments et surveillance de la santé',
    handicappedFeature4: 'Compagnie et soutien émotionnel',
    handicappedFeature5: 'Plans de soins personnalisés adaptés aux besoins individuels',
    
    babysittingFeature1: 'Activités sûres et engageantes pour les enfants',
    babysittingFeature2: 'Aide aux devoirs et soutien éducatif',
    babysittingFeature3: 'Préparation des repas et alimentation',
    babysittingFeature4: 'Routines du coucher et soins de nuit disponibles',
    babysittingFeature5: 'Soignants certifiés en RCR et premiers soins',
    
    elderlyFeature1: 'Aide à la vie quotidienne (bain, habillage, repas)',
    elderlyFeature2: 'Rappels de médicaments et surveillance de la santé',
    elderlyFeature3: 'Ménage léger et préparation des repas',
    elderlyFeature4: 'Transport aux rendez-vous',
    elderlyFeature5: 'Compagnie sociale et stimulation mentale',
    
    // About Page
    aboutUs: 'À Propos de Nous',
    aboutHeroDesc: 'Dévoués à fournir des soins exceptionnels avec compassion et professionnalisme',
    ourMission: 'Notre Mission',
    missionDesc: 'Fournir des soins compatissants et fiables qui améliorent la qualité de vie de ceux que nous servons',
    ourVision: 'Notre Vision',
    visionDesc: 'Être le service de soins le plus fiable de notre communauté',
    ourValues: 'Nos Valeurs',
    valuesDesc: 'Compassion, intégrité, respect et excellence dans tout ce que nous faisons',
    ourStory: 'Notre Histoire',
    storyPara1: 'Fondée avec une passion pour aider les autres, zia sociale sert les familles de notre communauté depuis plus d\'une décennie.',
    storyPara2: 'Notre équipe de soignants dévoués apporte des années d\'expérience et de compassion sincère à chaque interaction avec les clients.',
    storyPara3: 'Nous croyons que tout le monde mérite de vivre avec dignité, indépendance et joie - et nous sommes là pour rendre cela possible.',
    
    // Testimonials
    testimonialsHeroDesc: 'Écoutez les familles que nous avons eu le privilège de servir',
    parentTestimonial: 'Parent',
    familyTestimonial: 'Membre de la Famille',
    clientTestimonial: 'Client',
    testimonial1: 'Les soins que reçoit ma fille sont exceptionnels. L\'équipe est professionnelle, attentionnée et vraiment dévouée.',
    testimonial2: 'Trouver des soins de qualité pour mon père était un défi jusqu\'à ce que nous trouvions zia sociale. Ils ont été incroyables.',
    testimonial3: 'Je me sens en sécurité et à l\'aise avec mon soignant. Ils me traitent avec respect et gentillesse chaque jour.',
    
    // Contact Page
    contactHeroDesc: 'Nous aimerions avoir de vos nouvelles. Contactez-nous pour discuter de vos besoins en soins.',
    sendMessage: 'Envoyez-nous un Message',
    sendMessageDesc: 'Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    message: 'Message',
    emailUs: 'Envoyez-nous un Email',
    callUs: 'Appelez-nous',
    visitUs: 'Visitez-nous',
    messageSent: 'Message Envoyé!',
    messageSentDesc: 'Merci de nous avoir contactés. Nous vous répondrons bientôt.',
    
    // Footer
    footerTagline: 'Fournir des soins compatissants avec cœur et dévouement',
    quickLinks: 'Liens Rapides',
    allRightsReserved: 'Tous droits réservés.',
  },
};
