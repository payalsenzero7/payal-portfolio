import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { Button } from '../ui/Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-secondary)]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-primary)]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-[var(--color-accent-primary)] font-mono text-sm md:text-base mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-semibold text-[var(--color-text-primary)] mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              href="#projects"
            >
              <FolderOpen className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={personalInfo.resumeUrl}
              download
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]"
            >
              <span className="text-xs font-mono">Scroll to explore</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
