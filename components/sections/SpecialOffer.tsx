import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SpecialOffer() {
  return (
    <section id="special-offer" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center space-x-2 mb-8 fade-in">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-lg font-semibold text-primary">Limited Time Offer</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in">
          Take Advantage of Our Launch Offer!
        </h2>
        <p className="text-xl text-muted-foreground mb-12 fade-in">
          Get 30% off your first 3 months of service when you sign up today
        </p>
        <Button
          size="lg"
          className="animate-bounce hover:animate-none"
        >
          Claim the Offer Now!
        </Button>
      </div>
    </section>
  );
}