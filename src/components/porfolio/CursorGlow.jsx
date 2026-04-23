import { useEffect, useState } from "react"
import { motion } from "motion/react"

function CursorGlow() {
  const [position, setPosition] = useState({ x: 140, y: 100 })

  useEffect(() => {
    const handleMove = (event) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener("pointermove", handleMove)
    return () => window.removeEventListener("pointermove", handleMove)
  }, [])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[110px]"
      animate={{ x: position.x - 140, y: position.y - 140 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, mass: 0.4 }}
    />
  )
}

export default CursorGlow
