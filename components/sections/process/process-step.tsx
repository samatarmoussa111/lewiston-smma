import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export function ProcessStep({
  icon: Icon,
  title,
  description,
  index,
}: ProcessStepProps) {
  const stepNumber = (index + 1).toString().padStart(2, "0");

  return (
    <Card className="relative p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 group hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
      {/* Step Number */}
      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
        {stepNumber}
      </div>

      <div className="text-center space-y-4">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}
