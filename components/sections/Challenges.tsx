import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const challenges = [
  {
    problem: "Outdated Website",
    impact: "Losing 73% of potential customers due to poor first impressions",
    solution: "Modern, responsive design that converts",
  },
  {
    problem: "Poor Local Visibility",
    impact: "Missing out on 85% of local search traffic",
    solution: "Local SEO optimization for Google visibility",
  },
  {
    problem: "Low Mobile Performance",
    impact: "Frustrating 67% of mobile users who leave",
    solution: "Mobile-first approach with fast loading",
  },
  {
    problem: "No Analytics",
    impact: "Making decisions without data insights",
    solution: "Advanced tracking and reporting setup",
  },
];

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

export function Challenges() {
  return (
    <section id="challenges" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Can&apos;t Your Clients Find You Online?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            In today&apos;s digital age, your online presence can make or break
            your business. Let&apos;s turn your challenges into opportunities.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <XCircle className="h-6 w-6 text-destructive" />
                      <h3 className="text-xl font-semibold">{item.problem}</h3>
                    </div>
                  </div>

                  <div className="grow space-y-4">
                    <p className="text-muted-foreground">{item.impact}</p>
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                        <p className="font-medium text-primary">
                          Our Solution:
                        </p>
                      </div>
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className={cn(
              "group relative overflow-hidden",
              "transform transition-transform hover:scale-105"
            )}
          >
            Get Your Free Analysis
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
