import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'

export const Footer = () => {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 md:py-20 bg-black border-t border-white/5 px-6 relative">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-10 md:gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter-pro text-white">
            MZK<span className="text-zinc-500">.</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-sm">
            Membangun masa depan digital dengan presisi dan estetika minimalis.
          </p>
          <div className="flex gap-3 mt-4">
             {[
               { Icon: FaGithub, href: 'https://github.com/ahmdmzkiid-lgtm', label: 'GitHub' },
               { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmad-muzaki-3863813ba?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
               { Icon: FaInstagram, href: 'https://www.instagram.com/ahmdmzki12?igsh=dGp6M2g2d2M2anky', label: 'Instagram' }
             ].map(({ Icon, href, label }, i) => (
               <motion.a
                 key={i}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-all"
                 aria-label={label}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Icon className="w-5 h-5" />
               </motion.a>
             ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-sm font-medium w-full">
          <div className="h-px w-full max-w-[100px] bg-white/5" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-zinc-400">
            {[
              { name: 'Tentang', href: '#about' },
              { name: 'Proyek', href: '#projects' },
              { name: 'Keahlian', href: '#skills' },
              { name: 'Kontak', href: '#contact' },
            ].map(link => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors tracking-widest text-[10px] uppercase font-bold min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {year} Ahmad Muzaki. All rights reserved.
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </footer>
  )
}
