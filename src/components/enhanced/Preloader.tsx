import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter-pro text-white mb-2">
                MZK<span className="text-zinc-500">.</span>
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="h-[1px] bg-white/20"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 text-[10px] font-medium uppercase tracking-[0.4em] text-zinc-500"
              >
                Personal Portfolio
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
