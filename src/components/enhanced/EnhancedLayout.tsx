import React, { useEffect, useState } from 'react'
import { BackgroundEffects } from './BackgroundEffects'
import { Preloader } from './Preloader'
import { AnimatePresence } from 'framer-motion'

export const EnhancedLayout = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <AnimatePresence>
        {!loaded && <Preloader key="preloader" />}
      </AnimatePresence>
      
      <BackgroundEffects />
      
      <div className={`relative z-10 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  )
}
