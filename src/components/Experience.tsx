import { motion } from 'framer-motion'

export const Experience = () => {
  const experiences = [
    {
      role: 'Junior Front-End Developer',
      company: 'Independent',
      period: '2024 — 2025',
      description: 'Memimpin tim front-end dalam membangun dashboard tingkat perusahaan. Fokus pada optimalisasi performa dan skalabilitas arsitektur.'
    },
    {
      role: 'Front-End Developer',
      company: 'Independent',
      period: '2024 — 2026',
      description: 'Mengembangkan antarmuka pengguna yang presisi untuk berbagai klien startup teknologi.'
    },
    {
      role: 'Junior Web Developer',
      company: 'Independent',
      period: '2025 — 2026',
      description: 'Berkolaborasi dalam pengembangan fitur inti dan integrasi sistem backend.'
    }
  ]

  return (
    <section id="experience" className="py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4 px-1">Perjalanan Karir</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter-pro text-white">Digital <span className="text-zinc-500">Journey.</span></h3>
        </motion.div>

        <div className="space-y-12 max-w-4xl">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-20 items-start md:items-baseline"
            >
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 md:w-40 shrink-0">
                {exp.period}
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold tracking-tight text-white mb-2">{exp.role}</h4>
                <div className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">{exp.company}</div>
                <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl">
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

