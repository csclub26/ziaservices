import { Link } from 'react-router-dom';
import { Heart, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t('compassionateCare'),
      description: t('compassionateCareDesc'),
    },
    {
      icon: Users,
      title: t('experiencedTeam'),
      description: t('experiencedTeamDesc'),
    },
    {
      icon: Clock,
      title: t('flexibleSchedule'),
      description: t('flexibleScheduleDesc'),
    },
    {
      icon: Award,
      title: t('certifiedProfessionals'),
      description: t('certifiedProfessionalsDesc'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-accent/30 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="hover-scale">
              <Link to="/services">{t('exploreServices')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('whyChooseUs')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale transition-all">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">{t('readyToStart')}</h2>
          <p className="text-lg mb-8 opacity-90">{t('readyToStartDesc')}</p>
          <Button asChild size="lg" variant="secondary" className="hover-scale">
            <Link to="/contact">{t('getInTouch')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
