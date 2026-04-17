import { motion } from 'framer-motion'

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black px-6">
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase bg-white/5 border border-white/10 rounded-full text-zinc-400 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Creative Developer & UI Designer
            </span>
          </motion.div>
          
          <div className="mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter-pro text-white leading-[0.9] text-balance"
            >
              Ahmad <br />
              <span className="text-zinc-500">Muzaki.</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-normal leading-relaxed text-balance"
          >
            Membangun produk digital yang <span className="text-white font-medium">cepat</span>, <span className="text-white font-medium">elegan</span>, dan <span className="text-white font-medium">berdampak tinggi</span>. Fokus pada performa dan keindahan minimalis.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-elite btn-elite-primary w-full sm:w-auto px-8 min-h-[48px]"
            >
              Lihat Proyek
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-elite btn-elite-secondary w-full sm:w-auto px-8 min-h-[48px]"
            >
              Hubungi Saya
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Scroll indicator - Minimalist version */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
