import { useMemo, useState } from "react"
import { motion } from "motion/react"
import SectionHeading from "./SectionHeading"
import { FaReact, FaBootstrap, FaNodeJs, FaPython, FaDocker, FaAws, FaGithub, FaGitAlt, FaDigitalOcean, FaFigma, FaPhp, FaJava } from "react-icons/fa"
import { SiTypescript, SiRedis, SiMongodb } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill, RiSupabaseFill, RiFirebaseFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

const categoryOrder = ["All", "Frontend", "Backend", "Database", "DevOps", "Tools"]

const technologies = [
  { name: "React", icon: <FaReact />, border: "hover:border-sky-400", iconColor: "text-sky-400", category: "Frontend" },
  { name: "React-Native",  icon: <FaReact />, border: "hover:border-sky-400" , iconColor: "text-sky-400", category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, border: "hover:border-sky-600" , iconColor: "text-sky-600" , category: "Frontend" },
  { name: "Next.js", icon: <RiNextjsFill />, border: "hover:border-blue-50" , iconColor: "text-blue-50" , category: "Frontend" },
  { name: "Tailwind", icon: <RiTailwindCssFill />, border: "hover:border-sky-400" , iconColor: "text-sky-400" , category: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap />, border: "hover:border-violet-700" , iconColor: "text-violet-700" , category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, border: "hover:border-green-600", iconColor: "text-green-600", category: "Backend" },
  { name: "Python", icon: <FaPython />, border: "hover:border-yellow-400", iconColor: "text-yellow-400", category: "Backend" },
  { name: "MySQL", icon: <GrMysql />, border: "hover:border-blue-400", iconColor: "text-blue-400", category: "Database" },
  { name: "PostgreSQL", icon: <BiLogoPostgresql />, border: "hover:border-blue-400", iconColor: "text-blue-400", category: "Database" },
  { name: "Redis", icon: <SiRedis />, border: "hover:border-rose-500", iconColor: "text-rose-500", category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, border: "hover:border-green-500" , iconColor: "text-green-500" , category: "Database" },
  { name: "Firebase", icon: <RiFirebaseFill />, border: "hover:border-orange-600" , iconColor: "text-orange-600" , category: "Database" },
  { name: "Supabase", icon: <RiSupabaseFill />, border: "hover:border-emerald-600" , iconColor: "text-emerald-600" , category: "Database" },
  { name: "Docker", icon: <FaDocker />, border: "hover:border-blue-500" , iconColor: "text-blue-500" , category: "DevOps" },
  { name: "AWS", icon: <FaAws />, border: "hover:border-orange-500" , iconColor: "text-orange-500" , category: "DevOps" },
  { name: "Github", icon: <FaGithub />, border: "hover:border-gray-400", iconColor: "text-gray-400", category: "DevOps" },
  { name: "Laravel", icon: <FaLaravel />, border: "hover:border-indigo-400/70" , iconColor: "text-indigo-400/70" , category: "Backend" },
  { name: "Git", icon: <FaGitAlt />, border: "hover:border-orange-600" , iconColor: "text-orange-600" , category: "Tools" },
  { name: "Figma", icon: <FaFigma />, border: "hover:border-fuchsia-600" , iconColor: "text-fuchsia-600" , category: "Tools" },
  { name: "PHP", icon: <FaPhp />, border: "hover:border-indigo-400/70" , iconColor: "text-indigo-400/70" , category: "Backend" },
  { name: "Digital Ocean", icon: <FaDigitalOcean />, border: "hover:border-blue-500", iconColor: "text-blue-500", category: "DevOps" },
  { name: "Java", icon: <FaJava/>, border: "hover:border-orange-600", iconColor: "text-orange-600", category: "Backend" },
]

function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const marqueeItems = useMemo(() => [...technologies, ...technologies], [])

  const items = useMemo(
    () =>
      activeCategory === "All"
        ? technologies
        : technologies.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  return (
    <section id="tech-stack" className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Toolkit" title="Tech Stack" />
      <div className="mb-8 flex flex-wrap gap-2">
        {categoryOrder.map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className="relative rounded-xl px-4 py-2 text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
            >
              {isActive ? (
                <motion.span
                  layoutId="stack-tab"
                  className="absolute inset-0 rounded-xl border border-indigo-400/70 bg-indigo-500/15"
                  transition={{ type: "spring", stiffness: 370, damping: 30 }}
                />
              ) : (
                <span className="absolute inset-0 rounded-xl border border-zinc-800 bg-zinc-900/70" />
              )}
              <span className="relative">{category}</span>
            </button>
          )
        })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
        {items.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            // whileHover={{ y: -4 }}
            className={`rounded-lg border border-zinc-900 bg-zinc-950/75 p-3.5 text-center ${item.border} translate-y-2 hover:translate-y-0 transition-all duration-500`}
          >
            <div className="flex items-center justify-center gap-1">
              <div className={`${item.iconColor}`}>
                {item.icon}
              </div>
              <p className="text-sm text-zinc-300">{item.name}</p>
            </div>
          </motion.article>
        ))}
      </div>
      {/* <div className="relative mt-20 mb-10 space-y-5 overflow-hidden py-4">
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-6"
              animate={{ x: rowIndex === 0 ? ["-50%", "0%"] : ["0%", "-50%"] }}
              transition={{ duration: rowIndex === 0 ? 50 : 58, ease: "linear", repeat: Infinity }}
            >
              {marqueeItems
                .filter((_, index) => index % 2 === rowIndex)
                .map((item, index) => (
                  <div
                    key={`${item.name}-${rowIndex}-${index}`}
                    className="flex min-w-fit items-center mt-15 gap-2 px-4 py-2 text-sm text-zinc-300"
                  >
                    <span className={`text-[50px] ${item.iconColor}`}>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
            </motion.div>
          </div>
        ))}
      </div> */}
    </section>
  )
}

export default TechStackSection
