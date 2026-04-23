import { motion } from "motion/react"

function HeroSection() {
  return (
    <section
      id="about"
      className="relative mx-auto flex min-h-[84vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold uppercase tracking-[0.3em] text-indigo-400"
      >
        Hello, I&apos;m Chavy Martin Tapuyao
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-4xl text-6xl font-semibold tracking-tight text-zinc-50 md:text-8xl"
      >
        Full-Stack
        <br />
        Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400"
      >
        I craft high-performance digital experiences that merge technical precision with thoughtful
        design. Specializing in full-stack development, I transform complex challenges into elegant,
        scalable solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="rounded-xl border border-indigo-400/60 bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-8 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:text-zinc-100"
        >
          View Work
        </a>
      </motion.div>

    </section>
  )
}

export default HeroSection
