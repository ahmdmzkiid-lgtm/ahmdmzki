import { motion } from 'framer-motion'

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="noise-bg" />
      
      {/* Moving gradients for futuristic feel */}
      <motion.div 
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px]"
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  )
}
