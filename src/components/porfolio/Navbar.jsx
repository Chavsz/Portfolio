import { motion } from "motion/react"

function Navbar({ sections, activeSection }) {
  const handleSectionClick = (event, sectionId) => {
    event.preventDefault()
    const sectionElement = document.getElementById(sectionId)
    if (!sectionElement) return

    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${sectionId}`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-6">
        <ul className="hidden items-center justify-center gap-1 md:flex">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="relative block px-4 py-2 text-sm text-zinc-300 transition hover:text-zinc-100"
                  onClick={(event) => handleSectionClick(event, section.id)}
                >
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-indigo-400"
                    style={{ originX: 0 }}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  />
                  <span className="relative z-10">{section.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
