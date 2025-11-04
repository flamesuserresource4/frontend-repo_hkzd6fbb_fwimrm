import { motion } from 'framer-motion';
import { Rocket, Mail } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/50 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#top"
            className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-semibold tracking-tight"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Rocket className="h-5 w-5 text-indigo-600" />
            <span>Premium Portfolio</span>
          </motion.a>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <a
                    href={item.href}
                    className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow-md shadow-neutral-900/5 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Mail className="h-4 w-4" />
              Hire Me
            </motion.a>
          </div>
        </div>
      </nav>
    </div>
  );
}
