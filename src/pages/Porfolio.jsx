import { useEffect, useMemo, useState } from "react"
import { motion } from "motion/react"
import { FiSend } from "react-icons/fi"
import Navbar from "../components/porfolio/Navbar"
import HeroSection from "../components/porfolio/HeroSection"
import ExperienceSection from "../components/porfolio/ExperienceSection"
import ProjectSection from "../components/porfolio/ProjectSection"
import EducationSection from "../components/porfolio/EducationSection"
import TechStackSection from "../components/porfolio/TechStackSection"
import ContactPerson from "../components/porfolio/ContactPerson"
import Footer from "../components/porfolio/Footer"
import CursorGlow from "../components/porfolio/CursorGlow"

function Porfolio() {
  const sections = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "experiences", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "contact", label: "Contact" },
    ],
    [],
  )

  const [activeSection, setActiveSection] = useState("about")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Learning Assistance Volunteer",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: "-38% 0px -50% 0px", threshold: 0.1 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="min-h-screen scroll-smooth bg-black text-zinc-100">
      <CursorGlow />
      <div className="relative z-10">
        <Navbar sections={sections} activeSection={activeSection} />
        <main>
          <HeroSection />
          <ExperienceSection />
          <ProjectSection />
          <EducationSection />
          <TechStackSection />

          <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="mb-10 space-y-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">Connect</p>
              <h2 className="text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl">Get in Touch</h2>
            </motion.div>
            <div className="grid gap-10 lg:grid-cols-2">
              <ContactPerson />
              <motion.form
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="space-y-7 rounded-2xl border border-zinc-900 bg-zinc-950/70 p-7"
                onSubmit={handleSubmit}
              >
                {submitStatus === "success" && (
                  <div className="text-green-500">{submitMessage}</div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-500">{submitMessage}</div>
                )}
                <label className="block">
                  <span className="text-xs uppercase tracking-wider text-zinc-500">Name</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full border-b border-zinc-800 bg-transparent pb-3 text-zinc-200 outline-none transition focus:border-indigo-400"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-wider text-zinc-500">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-2 w-full border-b border-zinc-800 bg-transparent pb-3 text-zinc-200 outline-none transition focus:border-indigo-400"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-wider text-zinc-500">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="mt-2 w-full resize-none border-b border-zinc-800 bg-transparent pb-3 text-zinc-200 outline-none transition focus:border-indigo-400"
                  />
                </label>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/60 bg-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                >
                  <FiSend />
                  Send Message
                </button>
              </motion.form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Porfolio
