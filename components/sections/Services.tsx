import { Code, Globe, Megaphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: 'Modern Website Design',
      description: 'Responsive, fast-loading websites that convert visitors into customers.',
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: 'Local SEO Optimization',
      description: 'Boost your visibility in local search results and Google Maps.',
    },
    {
      icon: <Megaphone className="h-12 w-12 text-primary" />,
      title: 'Digital Advertising',
      description: 'Targeted Facebook and Google Ads campaigns for maximum ROI.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 fade-in">
          Tailored Services for Your Success
        </h2>
        <div className="grid md:grid-cols-3 gap-8 fade-in">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}