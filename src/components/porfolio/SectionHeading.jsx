import { motion } from "motion/react"

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-10 space-y-3"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">{eyebrow}</p>
      <h2 className="text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-zinc-400">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeading
