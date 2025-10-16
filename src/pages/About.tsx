import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Eye } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-accent/30 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('aboutUs')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              {t('aboutHeroDesc')}
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{t('ourMission')}</h3>
                  <p className="text-muted-foreground">{t('missionDesc')}</p>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{t('ourVision')}</h3>
                  <p className="text-muted-foreground">{t('visionDesc')}</p>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{t('ourValues')}</h3>
                  <p className="text-muted-foreground">{t('valuesDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-accent/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">{t('ourStory')}</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">{t('storyPara1')}</p>
              <p className="mb-4">{t('storyPara2')}</p>
              <p>{t('storyPara3')}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
