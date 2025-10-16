import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Baby, Users } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'handicapped-care',
      icon: Heart,
      title: t('handicappedCare'),
      description: t('handicappedCareDesc'),
      link: '/services/handicapped-care',
    },
    {
      id: 'babysitting',
      icon: Baby,
      title: t('babysitting'),
      description: t('babysittingDesc'),
      link: '/services/babysitting',
    },
    {
      id: 'elderly-care',
      icon: Users,
      title: t('elderlyCare'),
      description: t('elderlyCareDesc'),
      link: '/services/elderly-care',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-accent/30 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('ourServices')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              {t('servicesHeroDesc')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id} className="hover-scale flex flex-col">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Button asChild className="w-full">
                      <Link to={service.link}>{t('learnMore')}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
