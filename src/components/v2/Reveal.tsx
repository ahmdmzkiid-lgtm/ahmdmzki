import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  width?: "fit-content" | "100%"
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} className="relative" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, scale: 0.95, rotate: -2 },
          visible: { opacity: 1, y: 0, scale: 1, rotate: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
