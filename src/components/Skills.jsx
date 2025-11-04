import { motion } from 'framer-motion';
import { Code, Server, Cpu, Database, Wrench, Cloud } from 'lucide-react';

const groups = [
  {
    title: 'Languages',
    icon: Code,
    items: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
    gradient: 'from-amber-500/15 via-pink-500/15 to-purple-500/15',
  },
  {
    title: 'Frameworks',
    icon: Server,
    items: ['Spring Boot', 'React', 'Node.js'],
    gradient: 'from-indigo-500/15 via-sky-500/15 to-cyan-500/15',
  },
  {
    title: 'Platforms & DB',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
    gradient: 'from-emerald-500/15 via-lime-500/15 to-teal-500/15',
  },
  {
    title: 'DevOps',
    icon: Cloud,
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
    gradient: 'from-fuchsia-500/15 via-rose-500/15 to-orange-500/15',
  },
  {
    title: 'Tooling',
    icon: Wrench,
    items: ['IntelliJ IDEA', 'Vite', 'ESLint/Prettier'],
    gradient: 'from-slate-500/15 via-zinc-500/15 to-neutral-500/15',
  },
  {
    title: 'Runtime',
    icon: Cpu,
    items: ['JVM', 'JDK 21', 'GraalVM (basic)'],
    gradient: 'from-blue-500/15 via-violet-500/15 to-indigo-500/15',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A curated selection of tools and technologies I use to build performant, resilient, and delightful products.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              viewport={{ once: true }}
            >
              <div className={`h-24 bg-gradient-to-br ${g.gradient}`} />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <g.icon className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{g.title}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
