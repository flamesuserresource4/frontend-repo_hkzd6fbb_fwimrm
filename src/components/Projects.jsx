import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collab Board',
    desc: 'WebSocket-driven canvas with optimistic UI and CRDT sync. Built with React + Spring Boot.',
    tags: ['React', 'Spring Boot', 'WebSocket', 'CRDT'],
    live: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront, cart & checkout, multi-tenant architecture, production hardened.',
    tags: ['Java', 'PostgreSQL', 'Redis', 'Docker'],
    live: '#',
    repo: '#',
  },
  {
    title: 'DevOps Pipeline',
    desc: 'GitHub Actions + Docker + K8s for blue/green deploys with canary monitoring.',
    tags: ['CI/CD', 'Docker', 'Kubernetes', 'Grafana'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Selected Work
            </motion.h2>
            <motion.p
              className="mt-2 text-neutral-600 dark:text-neutral-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A few projects that represent my approach: robust architecture, delightful UX, and performance.
            </motion.p>
          </div>
          <motion.a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <Code className="h-4 w-4" />
            Build together
          </motion.a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              viewport={{ once: true }}
            >
              <div className="h-36 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 dark:from-indigo-500/15 dark:via-fuchsia-500/15 dark:to-cyan-500/15" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:underline"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
