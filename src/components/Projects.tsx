import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export const Projects = () => {
  const projects = [
    {
      title: 'SNBT Tracker (jugijagijug0)',
      category: 'Web Application',
      description: 'Asisten tempur pejuang PTN. Lacak progres belajar, analisis skor try-out, dan temukan kelemahan belajar dalam satu platform terintegrasi.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      tech: ['TypeScript', 'React', 'Vite', 'Tailwind'],
      github: 'https://github.com/ahmdmzkiid-lgtm',
      live: 'https://snbt-tracker.vercel.app',
      isCompleted: true
    },
    {
      title: 'Project Alpha',
      description: 'Tahap pengembangan.',
      tech: ['React', 'Tailwind'],
      isCompleted: false
    },
    {
      title: 'Project Beta',
      description: 'Tahap pengembangan.',
      tech: ['React', 'Tailwind'],
      isCompleted: false
    },
    {
       title: 'Project Gamma',
       description: 'Tahap pengembangan.',
       tech: ['Tailwind', 'React'],
       isCompleted: false
    }
  ]

  return (
    <section id="projects" className="py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4 px-1">Selected Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter-pro text-white">Digital <span className="text-zinc-500">Showcase.</span></h3>
        </motion.div>

        <div className="responsive-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="glass-panel overflow-hidden mb-6 aspect-[16/10] shrink-0 relative group bg-zinc-900/50">
                {project.isCompleted ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">In Progress</span>
                  </div>
                )}
                {project.isCompleted === false && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Ongoing
                  </div>
                )}
              </div>
              
              <div className="flex flex-col flex-1 gap-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    {project.category && (
                      <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block">
                        {project.category}
                      </span>
                    )}
                    <h4 className={`text-2xl font-bold tracking-tight ${project.isCompleted ? 'text-white' : 'text-zinc-500'}`}>
                      {project.title}
                    </h4>
                  </div>
                  {project.isCompleted && (
                    <div className="flex gap-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors" aria-label="Github">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-zinc-500 hover:text-white transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
                
                <p className="text-zinc-400 leading-relaxed max-w-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

