import { Award, Clock, HeartHandshake, Wallet } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Expert Team',
      description: 'Years of experience in digital marketing',
    },
    {
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: 'Competitive Pricing',
      description: 'Affordable solutions for every budget',
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround on all projects',
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: 'Dedicated Support',
      description: '24/7 customer service and maintenance',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 fade-in">
          Why Work with Us?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 fade-in">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg hover:bg-muted/50 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}