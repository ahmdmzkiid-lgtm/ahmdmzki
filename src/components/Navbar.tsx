import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  // Track active section
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Hamburger line variants
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  }
  const midLine = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: 20 },
  }
  const botLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  }

  const menuOverlayVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const linkContainerVariants = {
    closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  }

  const linkItemVariants = {
    closed: { opacity: 0, y: 30, filter: 'blur(10px)' },
    open: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? 'nav-glass py-3 md:py-4'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-2xl font-bold tracking-tighter-pro text-white group relative"
          >
            <span className="relative z-10">
              MZK<span className="text-zinc-500 group-hover:text-white transition-colors duration-300">.</span>
            </span>
            <motion.span
              className="absolute -inset-2 bg-white/5 rounded-lg -z-0"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-full px-1 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full min-h-[36px] flex items-center ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navActiveIndicator"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                )
              })}
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-elite btn-elite-primary text-xs py-2 px-6 ml-4 group"
            >
              <span>Mulai Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger - Custom animated lines */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[6px] relative z-[120]"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            <motion.span
              variants={topLine}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
            <motion.span
              variants={midLine}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
            <motion.span
              variants={botLine}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-6 h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuOverlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[110] bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center px-6"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[100px]" />
              <div className="absolute bottom-[20%] right-[10%] w-[200px] h-[200px] bg-white/[0.03] rounded-full blur-[80px]" />
            </div>

            <motion.div
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-2 relative z-10"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  variants={linkItemVariants}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-4xl sm:text-5xl font-bold tracking-tighter text-white/80 hover:text-white transition-colors py-3 min-h-[52px] flex items-center relative group"
                >
                  <span className="text-zinc-600 text-sm font-mono mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                  {link.name}
                  <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all text-zinc-400" />
                </motion.a>
              ))}

              <motion.div variants={linkItemVariants} className="mt-8 pt-8 border-t border-white/10 w-full flex justify-center">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="btn-elite btn-elite-primary px-12 py-4 text-base"
                >
                  Mulai Project
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
