import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('welcomeTitle')}</h1>
        <p className="text-xl text-muted-foreground">{t('welcomeSubtitle')}</p>
      </div>
    </div>
  );
};

export default Index;
