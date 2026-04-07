import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Kontak', href: '#contact' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'nav-glass py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter-pro text-white group">
            MZK<span className="text-zinc-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium text-zinc-400">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#contact" className="btn-elite btn-elite-primary text-xs py-2 px-6">
              Mulai Project
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white bg-white/5 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-bold tracking-tighter text-white hover:text-zinc-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4 btn-elite btn-elite-primary px-12 py-4"
              >
                Mulai Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

