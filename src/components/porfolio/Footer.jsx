import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi"

function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row">
        <p>© 2026 Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-zinc-400">
          <a href="#" className="transition hover:text-zinc-100" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="#" className="transition hover:text-zinc-100" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="#" className="transition hover:text-zinc-100" aria-label="Twitter">
            <FiFacebook />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
