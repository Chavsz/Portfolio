import { motion } from "motion/react"
import { FiBriefcase } from "react-icons/fi"
import SectionHeading from "./SectionHeading"
import pixzelLogo from "../../assets/pixzel digital image.jpg"

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Pixzel Digital",
    years: "2026 - Present",
    description:
      "Developed and maintained web applications using React, Next.js, Tailwind, and TypeScript. Worked on both frontend and backend development.",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "React-Redux", "PHP", "Laravel", "Blade", "Bootstrap", "CSS", "MySQL", "Github"],
  },
  {
    title: "Full-Stack Developer",
    company: "Upwork",
    years: "2026 - Present",
    description:
      "Freelance Full-Stack Developer. Worked on both frontend and backend development.",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "Bootstrap", "CSS", "MySQL", "PostgreSQL", "MongoDB", "Supabase", "Github", "Git"],
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="relative ml-3 space-y-7 pl-8">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 top-0 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 7px, transparent 7px, transparent 14px)",
          }}
          animate={{ backgroundPosition: ["0px 0px", "0px 28px"] }}
          transition={{ duration: 2.0, ease: "linear", repeat: Infinity }}
        />
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative rounded-2xl border border-zinc-900 bg-zinc-950/75 p-7"
          >
            <span className="absolute -left-[53.5px] top-2 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-black">
              <img src={pixzelLogo} alt="Pixzel Digital logo" className="h-full w-full rounded-full object-cover" />
            </span>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="flex items-center gap-2 text-2xl font-semibold text-zinc-100">
                  <FiBriefcase className="text-indigo-400" />
                  {experience.title}
                </h3>
                <p className="mt-1 text-zinc-400">{experience.company}</p>
              </div>
              <p className="text-sm text-zinc-500">{experience.years}</p>
            </div>
            <p className="mt-5 text-zinc-400">{experience.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
