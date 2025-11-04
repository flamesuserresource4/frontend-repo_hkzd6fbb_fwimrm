import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-500/10 to-transparent blur-2xl" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s build something exceptional
        </motion.h2>
        <motion.p
          className="mt-3 text-neutral-600 dark:text-neutral-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Open for roles, freelancing, fun side projects, and startup ideas. I respond quickly—reach out and we can discuss your vision.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-5 py-2.5 text-sm font-semibold text-neutral-900 dark:text-white hover:-translate-y-0.5 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-5 py-2.5 text-sm font-semibold text-neutral-900 dark:text-white hover:-translate-y-0.5 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </motion.div>

        <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
      </div>
    </section>
  );
}
