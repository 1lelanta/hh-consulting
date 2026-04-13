import { motion } from "framer-motion";

export const sectionRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const sectionRevealTransition = {
  duration: 0.6,
  ease: [0.22, 0.61, 0.36, 1],
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

function AnimatedSection({
  id,
  backgroundClassName = "bg-white",
  className = "",
  children,
  ...rest
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      variants={sectionRevealVariants}
      transition={sectionRevealTransition}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal relative -mx-3 scroll-mt-28 px-3 py-16 text-brand-navy950 sm:-mx-6 sm:px-6 md:py-24 lg:-mx-10 lg:px-10 2xl:-mx-14 2xl:px-14 ${backgroundClassName} ${className}`}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;