import { FiMail, FiMapPin } from "react-icons/fi"

function ContactPerson() {
  return (
    <aside className="space-y-8">
      <p className="max-w-md text-lg leading-relaxed text-zinc-400">
        Have a project in mind or want to discuss opportunities? I&apos;m always open to
        conversations about new ventures and collaborations.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
            <FiMail />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
            <a href="mailto:hello@portfolio.dev" className="text-zinc-200 hover:text-zinc-50">
              martinchavy383@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
            <FiMapPin />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">Location</p>
            <p className="text-zinc-200">Iligan City, Philippines</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default ContactPerson
