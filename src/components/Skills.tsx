import { motion } from 'framer-motion'
import { Calendar, GraduationCap } from 'lucide-react'

export const Skills = () => {
  const education = [
    {
      degree: 'TAMATAN SMA',
      school: 'SMAN 6 DEPOK',
      period: '2023 - 2026',
      description: 'Jurusan Teknik',
      icon: GraduationCap,
    },
    {
      degree: 'Sertifikasi FRONTEND DEV',
      school: 'Dicoding Indonesia',
      period: '2025',
      description: 'Spesialisasi dalam desain sistem dan aksesibilitas produk digital.',
      icon: GraduationCap,
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4 px-1">Akademik & Sertifikasi</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter-pro text-white">Latar <span className="text-zinc-500">Belakang.</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 md:p-8 lg:p-10 flex flex-col justify-between group hover:border-white/15 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2 min-h-[44px]">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <edu.icon className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">{edu.degree}</h4>
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
