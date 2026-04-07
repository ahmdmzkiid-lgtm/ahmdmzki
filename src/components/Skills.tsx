import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export const Skills = () => {
  const education = [
    {
      degree: 'TAMATAN SMA',
      school: 'SMAN 6 DEPOK',
      period: '2023 - 2026',
      description: 'Jurusan Teknik'
    },
    {
      degree: 'Sertifikasi FRONT END DEV',
      school: 'Dicoding',
      period: '2025',
      description: 'Spesialisasi dalam desain sistem dan aksesibilitas produk digital.'
    }
  ]

  return (
    <section id="skills" className="py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4 px-1">Akademik & Sertifikasi</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter-pro text-white">Latar <span className="text-zinc-500">Belakang.</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold tracking-tight text-white mb-2">{edu.degree}</h4>
                <div className="text-sm font-medium text-white/50 mb-6 uppercase tracking-wider">{edu.school}</div>
                
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

