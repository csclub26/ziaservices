import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      initials: 'SJ',
      role: t('parentTestimonial'),
      text: t('testimonial1'),
      rating: 5,
    },
    {
      name: 'Michael Chen',
      initials: 'MC',
      role: t('familyTestimonial'),
      text: t('testimonial2'),
      rating: 5,
    },
    {
      name: 'Emma Williams',
      initials: 'EW',
      role: t('clientTestimonial'),
      text: t('testimonial3'),
      rating: 5,
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
              {t('testimonials')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              {t('testimonialsHeroDesc')}
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
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

export default Testimonials;
