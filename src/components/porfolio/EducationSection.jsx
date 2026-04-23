import { motion } from "motion/react"
import { FiAward } from "react-icons/fi"
import SectionHeading from "./SectionHeading"

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Mindanao State University - Iligan Institute of Technology",
    years: "2022 - 2026",
    details:
      "Specialization in Web Development and Mobile Application Development.",
  },
]

function EducationSection() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Foundation" title="Education" />
      <div className="grid gap-6 lg:grid-cols-[1fr]">
        <div className="space-y-5">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl border border-zinc-900 bg-zinc-950/75 p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-100">{item.degree}</h3>
                  <p className="mt-1 text-zinc-400">{item.school}</p>
                </div>
                <p className="text-sm text-zinc-500">{item.years}</p>
              </div>
              <p className="mt-4 text-zinc-400">{item.details}</p>
            </motion.article>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="min-h-72 rounded-2xl border border-zinc-900 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.5),transparent_38%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.18),transparent_55%),linear-gradient(145deg,#151724,#07080f)]"
        /> */}
      </div>
    </section>
  )
}

export default EducationSection
