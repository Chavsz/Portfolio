import { motion } from "motion/react"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import SectionHeading from "./SectionHeading"

const projects = [
  {
    year: "2026",
    role: "Frontend Developer",
    title: "Job Market",
    description:
      "A job market platform that allows users to find and apply for jobs.",
    stack: ["JavaScript", "React", "Bootstrap", "CSS", "React-Redux"],
  },
  {
    year: "2026",
    role: "Full-Stack Developer",
    title: "Local Economic Developmentt & Investment Promotion (LEDIP)",
    description:
      "A platform that allows users to find and apply for jobs.",
    stack: ["PHP", "Laravel", "Blade" , "Bootstrap", "CSS", "MySQL"],
  },
  {
    year: "2026",
    role: "Full-Stack Developer",
    title: "NDRRMO Content Management System",
    description:
      "A platform that allows users to manage and publish content for the NDRRMO.",
    stack: ["PHP", "Laravel", "Blade" , "Bootstrap", "CSS", "MySQL"],
  },
  {
    year: "2026",
    role: "Full-Stack Developer",
    title: "Attendance Management System",
    description:
      "A platform that allows users to manage and publish attendance for the employees.",
    stack: ["JavaScript", "Next.js", "Tailwind", "CSS", "Supabase"],
  },
]

function ProjectSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Projects" title="Selected Projects" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/70"
          >
            <div className="h-40 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_30%),linear-gradient(135deg,#121421,#07080f)] p-5">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>{project.year}</span>
                <span className="text-indigo-300">{project.role}</span>
              </div>
            </div>
            <div className="space-y-4 p-5">
              <h3 className="text-2xl font-semibold text-zinc-100">{project.title}</h3>
              <p className="text-zinc-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-1">
                <a href="#" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100">
                  <FiExternalLink />
                  Live
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100">
                  <FiGithub />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* view more projects */}
      <div className="flex justify-center mt-20">
        <a href="#" className="inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-900/70 px-8 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:text-zinc-100">
          View More Projects
        </a>
      </div>
    </section>
  )
}

export default ProjectSection
