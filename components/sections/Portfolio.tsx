import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Portfolio() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "Our online presence has transformed since working with them. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "Dental Clinic",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "Professional team that delivered exactly what we needed. Outstanding results!",
    },
    {
      name: "Emily Davis",
      role: "Boutique Shop",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "The best investment we've made for our business. Sales have increased significantly.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 fade-in">
          Our Clients Trust Us
        </h2>
        <Carousel className="fade-in">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Avatar className="h-16 w-16 mx-auto">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <blockquote className="mb-4 text-muted-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}