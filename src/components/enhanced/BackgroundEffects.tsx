import { motion } from 'framer-motion'

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
      
      {/* Moving gradients */}
      <motion.div 
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-white/[0.015] rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-white/[0.015] rounded-full blur-[120px]"
      />
    </div>
  )
}
