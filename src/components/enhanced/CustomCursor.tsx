import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10)
      mouseY.set(e.clientY - 10)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: mouseX,
        y: mouseY,
        scale: isHovering ? 2.5 : 1,
        opacity: 0.8
      }}
    />
  )
}
