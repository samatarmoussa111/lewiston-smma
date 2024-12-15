import { motion } from "framer-motion";
import { ProcessHeader } from "./process-header";
import { ProcessStep } from "./process-step";
import { processSteps } from "./process-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10" />

      <div className="container mx-auto px-4">
        <ProcessHeader />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <ProcessStep
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * 
 * import { Check, FileSearch, Rocket, Users } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Free Consultation',
      description: 'We discuss your goals and requirements',
    },
    {
      icon: <FileSearch className="h-8 w-8 text-primary" />,
      title: 'Personalized Proposal',
      description: 'Custom strategy tailored to your needs',
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: 'Website Creation',
      description: 'Development and optimization phase',
    },
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: 'Launch & Optimize',
      description: 'Go live and continuous improvement',
    },
  ];

  return (
    <section id="process" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 fade-in">
          A Simple and Effective Process
        </h2>
        <div className="relative fade-in">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden md:block" />
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-background p-6 rounded-lg relative z-10 h-full transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 */
