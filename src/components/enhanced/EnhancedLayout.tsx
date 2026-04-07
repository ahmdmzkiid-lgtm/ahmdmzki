import React from 'react'
import { BackgroundEffects } from './BackgroundEffects'
import { CustomCursor } from './CustomCursor'
import { Preloader } from './Preloader'
import { AnimatePresence } from 'framer-motion'

export const EnhancedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-[#0A192F] text-[#ccd6f6] selection:bg-cyan-400 selection:text-navy-900">
      <AnimatePresence>
        <Preloader key="preloader" />
      </AnimatePresence>
      
      <CustomCursor />
      <BackgroundEffects />
      
      <main className="relative z-10 transition-opacity duration-1000">
        {children}
      </main>
      
      {/* Global Glow Overlay for futuristic feel */}
      <div className="fixed inset-0 pointer-events-none z-[100] shadow-[inset_0_0_100px_rgba(100,255,218,0.02)]" />
    </div>
  )
}
