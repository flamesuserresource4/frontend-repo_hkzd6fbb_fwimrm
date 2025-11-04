import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Briefcase, Code, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-10 md:pt-16 lg:pt-24">
          <div className="relative order-2 lg:order-1">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Java Full‑Stack Engineer
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I craft premium, production‑grade web experiences with Java, Spring Boot, React, and cloud‑native tooling. Open to roles, freelancing, fun projects, and startup collaborations.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {[
                { href: '#contact', label: 'Available for Hire', icon: Briefcase, primary: true },
                { href: '#work', label: 'See Projects', icon: Code },
                { href: 'https://github.com', label: 'GitHub', icon: Github },
                { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
              ].map((btn, i) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  className={
                    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ' +
                    (btn.primary
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5'
                      : 'bg-white/70 dark:bg-neutral-800/70 backdrop-blur border border-neutral-200/70 dark:border-neutral-700 text-neutral-900 dark:text-white hover:-translate-y-0.5')
                  }
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i + 0.2 }}
                >
                  <btn.icon className="h-4 w-4" />
                  {btn.label}
                  {btn.href.startsWith('http') && <ExternalLink className="h-3.5 w-3.5 opacity-70" />}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              id="stack"
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker & K8s'].map((tag) => (
                <div
                  key={tag}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-2 text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative h-[55vh] md:h-[60vh] lg:h-[70vh] order-1 lg:order-2">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800 shadow-xl">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-neutral-950/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
