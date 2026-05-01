import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi"

function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row">
        <p>© 2026 Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-zinc-400">
          {/* Github */}
          <a href="https://github.com/Chavsz?tab=overview&from=2026-04-01&to=2026-04-27" className="transition hover:text-zinc-100" aria-label="GitHub">
            <FiGithub />
          </a>
          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/chavy-martin-tapuyao-53396a335/" className="transition hover:text-zinc-100" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/Tapuyao2003" className="transition hover:text-zinc-100" aria-label="Facebook">
            <FiFacebook />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
