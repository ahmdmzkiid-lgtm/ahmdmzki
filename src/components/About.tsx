import { motion } from 'framer-motion'

export const About = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind', 'Framer Motion', 'PostgreSQL', 'Figma']

  return (
    <section id="about" className="py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">Filosofi Desain</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter-pro text-white mb-8">
              Membangun dengan <br />
              <span className="text-zinc-500">Presisi & Estetika.</span>
            </h3>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-xl mb-12">
              <p>
                Saya adalah seorang <span className="text-white">Creative Developer</span> yang percaya bahwa performa adalah bentuk tertinggi dari desain. Setiap baris kode harus mendukung pengalaman yang lancar dan bermakna.
              </p>
              <p>
                Berfokus pada pembuatan produk digital yang tidak hanya terlihat indah secara visual, tetapi juga terasa cepat dan intuitif di setiap interaksi.
              </p>
            </div>

            <div className="glass-panel p-8 md:p-12">
              <h4 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-8">Teknologi Pilihan</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="text-sm font-medium text-white/70 border-b border-white/5 pb-3 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="photo-reveal-container aspect-portrait-pro relative">
              <img 
                src="/image/personal image.jpeg" 
                alt="Personal Life" 
                className="photo-reveal-img w-full h-full"
                style={{ objectPosition: 'center 45%' }} // Smart crop to hide Instagram header/footer
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-medium tracking-widest text-white/60 uppercase block mb-1">Off-duty</span>
                <p className="text-white font-bold tracking-tight text-xl">Always moving forward.</p>
              </div>
            </div>
            <p className="mt-4 text-xs font-medium text-zinc-600 uppercase tracking-[0.3em] text-center">
              Personal // 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


