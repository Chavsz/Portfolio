import { useRef } from "react"

function Navbar({ sections, activeSection, onSectionClick }) {
  const scrollAnimationRef = useRef(null)

  const smoothScrollTo = (targetY) => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current)
    }

    const startY = window.scrollY
    const distance = targetY - startY
    const duration = 550
    const startTime = performance.now()

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

      window.scrollTo(0, startY + distance * easedProgress)

      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(step)
        return
      }

      scrollAnimationRef.current = null
    }

    scrollAnimationRef.current = requestAnimationFrame(step)
  }

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault()
    const sectionElement = document.getElementById(sectionId)
    if (!sectionElement) return

    const headerOffset = 64
    const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY - headerOffset

    onSectionClick?.(sectionId)
    smoothScrollTo(Math.max(0, sectionTop))
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
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-indigo-400 transition-transform duration-500 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
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
