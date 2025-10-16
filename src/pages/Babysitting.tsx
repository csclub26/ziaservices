import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, CheckCircle } from 'lucide-react';

const Babysitting = () => {
  const { t } = useLanguage();

  const features = [
    t('babysittingFeature1'),
    t('babysittingFeature2'),
    t('babysittingFeature3'),
    t('babysittingFeature4'),
    t('babysittingFeature5'),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-accent/30 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <Baby className="h-16 w-16 text-primary mx-auto mb-6 animate-fade-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t('babysitting')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              {t('babysittingFullDesc')}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('whatWeOffer')}</h2>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-accent/20">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">{t('enrollNow')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('enrollNowDesc')}
            </p>
            <Button asChild size="lg" className="hover-scale">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpKMjki7cmVZGJADtlwQCeIRe_9frmxyI42Hityl-onyxz5w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                {t('enrollWithMe')}
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Babysitting;
