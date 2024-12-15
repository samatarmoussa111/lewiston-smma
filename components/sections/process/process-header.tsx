import { motion } from "framer-motion";

export function ProcessHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-primary font-medium mb-2"
      >
        Our Workflow
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        A Simple and Effective Process
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground text-lg"
      >
        We follow a proven methodology to deliver exceptional results for your
        business, ensuring a smooth and transparent journey from start to
        finish.
      </motion.p>
    </div>
  );
}
