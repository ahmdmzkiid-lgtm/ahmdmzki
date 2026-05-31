import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export const Experience = () => {
  const experiences = [
    {
      role: 'Fullstack Developer',
      company: 'Eduzet',
      period: '2026',
      description: 'Membangun dan mengembangkan platform edutech untuk persiapan UTBK, SNBT, dan ujian mandiri. Bertanggung jawab atas pengembangan fitur fullstack dari frontend hingga backend, termasuk sistem pembelajaran interaktif, bank soal adaptif, dan analisis hasil belajar untuk membantu siswa mencapai kampus impian.'
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4 px-1">Perjalanan Karir</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter-pro text-white">Digital <span className="text-zinc-500">Journey.</span></h3>
        </motion.div>

        <div className="space-y-0 max-w-4xl relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-4 md:gap-20 items-start md:items-baseline group py-8 md:py-10 border-b border-white/5 last:border-0 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-5 md:left-0 top-10 md:top-12 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors duration-300 -translate-x-[3px] hidden md:block" />

              <div className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 md:w-40 shrink-0 md:pl-6 flex items-center gap-2 min-h-[44px]">
                <Briefcase className="w-3.5 h-3.5 md:hidden" />
                {exp.period}
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-white/90 transition-colors">{exp.role}</h4>
                <div className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">{exp.company}</div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-lg max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
