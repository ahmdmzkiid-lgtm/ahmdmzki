import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'

// Hook to detect touch device
const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])
  return isTouch
}

// Tilt Card Component for Desktop
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isTouch = useIsTouchDevice()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 300, damping: 30 })
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 300, damping: 30 })

  // Build the glow gradient as a MotionValue at top level (hooks rule safe)
  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, rgba(255,255,255,0.06), transparent 40%)`
  )

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  if (isTouch) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`${className} relative`}
    >
      {children}
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          opacity: isHovered ? 0.6 : 0,
          background: glowBackground,
          transition: 'opacity 0.3s ease',
        }}
      />
    </motion.div>
  )
}

// Skeleton Loader
const ProjectSkeleton = () => (
  <div className="flex flex-col animate-pulse">
    <div className="bg-zinc-800/50 rounded-xl aspect-[16/10] mb-6" />
    <div className="space-y-3">
      <div className="h-3 w-20 bg-zinc-800/50 rounded" />
      <div className="h-7 w-3/4 bg-zinc-800/50 rounded" />
      <div className="h-4 w-full bg-zinc-800/50 rounded" />
      <div className="h-4 w-2/3 bg-zinc-800/50 rounded" />
      <div className="flex gap-3 pt-4">
        <div className="h-3 w-14 bg-zinc-800/50 rounded" />
        <div className="h-3 w-14 bg-zinc-800/50 rounded" />
        <div className="h-3 w-14 bg-zinc-800/50 rounded" />
      </div>
    </div>
  </div>
)

// Mobile Expandable Card
const MobileExpandableCard = ({
  project,
  index,
}: {
  project: {
    title: string
    category?: string
    description: string
    image?: string
    tech: string[]
    github?: string
    live?: string
    isCompleted: boolean
  }
  index: number
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="glass-panel overflow-hidden text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-xl active:scale-[0.98] transition-transform min-h-[44px]"
        aria-expanded={expanded}
      >
        {/* Image */}
        <div className="aspect-[16/10] relative bg-zinc-900/50 overflow-hidden">
          {project.isCompleted && project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">In Progress</span>
            </div>
          )}
          {!project.isCompleted && (
            <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Ongoing
            </div>
          )}
        </div>

        {/* Collapsed Info */}
        <div className="p-5 flex justify-between items-center">
          <div>
            {project.category && (
              <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block mb-1">
                {project.category}
              </span>
            )}
            <h4 className={`text-xl font-bold tracking-tight ${project.isCompleted ? 'text-white' : 'text-zinc-500'}`}>
              {project.title}
            </h4>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 shrink-0 ml-3"
          >
            <ChevronDown className="w-5 h-5 text-zinc-400" />
          </motion.div>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 space-y-4">
              <p className="text-zinc-400 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.isCompleted && (
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all min-h-[44px]"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-sm font-medium text-black hover:bg-white/90 transition-all min-h-[44px]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const isTouch = useIsTouchDevice()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: 'SNBT Tracker (jugijagijug0)',
      category: 'Web Application',
      description: 'Asisten tempur pejuang PTN. Lacak progres belajar, analisis skor try-out, dan temukan kelemahan belajar dalam satu platform terintegrasi.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Vite', 'Tailwind', 'PostgreSQL'],
      github: 'https://github.com/ahmdmzkiid-lgtm',
      live: 'https://snbt-tracker.vercel.app',
      isCompleted: true
    },
    {
      title: 'Prediksi Skor aman SNBT/UTBK',
      category: 'Web Application',
      description: 'Prediksi Skor aman SNBT/UTBK dengan modern UI/UX design, Dengan menggunakan metode machine learning untuk memprediksi skor aman SNBT/UTBK.',
      image: '/image/snbt-predictor.webp',
      tech: ['React', 'TypeScript', 'Tailwind', 'Vite', 'PostgreSQL'],
      github: 'https://github.com/ahmdmzkiid-lgtm',
      live: 'https://ahmdmzki.my.id',
      isCompleted: true
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
    <section id="projects" className="py-20 md:py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4 px-1">Selected Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter-pro text-white">
            Digital <span className="text-zinc-500">Showcase.</span>
          </h3>
        </motion.div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[0, 1, 2, 3].map((i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {/* Mobile: Tap-to-expand cards */}
            {isTouch ? (
              <div className="grid grid-cols-1 gap-4 md:hidden">
                {projects.map((project, i) => (
                  <MobileExpandableCard key={project.title} project={project} index={i} />
                ))}
              </div>
            ) : null}

            {/* Desktop/Tablet: Tilt effect cards */}
            <div className={`${isTouch ? 'hidden md:grid' : 'grid'} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`}>
              {projects.map((project, i) => (
                <TiltCard key={project.title} className="group flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col h-full"
                  >
                    {/* Card Image */}
                    <div className="glass-panel overflow-hidden mb-6 aspect-[16/10] shrink-0 relative bg-zinc-900/50 rounded-xl">
                      {project.isCompleted ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                            In Progress
                          </span>
                        </div>
                      )}

                      {/* Hover overlay for completed projects */}
                      {project.isCompleted && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                              aria-label="View GitHub"
                            >
                              <FaGithub className="w-5 h-5" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                              aria-label="View Live Demo"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      )}

                      {!project.isCompleted && (
                        <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                          Ongoing
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-1 gap-3">
                      <div className="space-y-1">
                        {project.category && (
                          <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 block">
                            {project.category}
                          </span>
                        )}
                        <h4 className={`text-xl md:text-2xl font-bold tracking-tight ${project.isCompleted ? 'text-white' : 'text-zinc-500'}`}>
                          {project.title}
                        </h4>
                      </div>

                      <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
