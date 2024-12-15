import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497215728101-856f4ea42174)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-up">
          Boost Your Local Visibility with a Professional Website
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up delay-200">
          We help local businesses attract more clients through tailored digital solutions
        </p>
        <Button
          size="lg"
          className="animate-fade-up delay-300 group transition-all duration-300 hover:scale-105"
        >
          Get a Free Quote
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </header>
  );
}