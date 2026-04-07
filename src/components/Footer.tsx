import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-20 bg-black border-t border-white/5 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter-pro text-white">
            MZK<span className="text-zinc-500">.</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-sm">
            Membangun masa depan digital dengan presisi dan estetika minimalis.
          </p>
          <div className="flex gap-6 mt-4">
             {[
               { Icon: FaGithub, href: 'https://github.com/ahmdmzkiid-lgtm' },
               { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmad-muzaki-3863813ba?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
               { Icon: FaInstagram, href: 'https://www.instagram.com/ahmdmzki12?igsh=dGp6M2g2d2M2anky' }
             ].map(({ Icon, href }, i) => (
               <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors">
                 <Icon className="w-6 h-6" />
               </a>
             ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-sm font-medium w-full">
          <div className="h-px w-full max-w-[100px] bg-white/5" />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors tracking-widest text-[10px] uppercase font-bold">Tentang</a>
            <a href="#projects" className="hover:text-white transition-colors tracking-widest text-[10px] uppercase font-bold">Proyek</a>
            <a href="#skills" className="hover:text-white transition-colors tracking-widest text-[10px] uppercase font-bold">Keahlian</a>
            <a href="#contact" className="hover:text-white transition-colors tracking-widest text-[10px] uppercase font-bold">Kontak</a>
          </div>
          <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {year} Ahmad Muzaki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}



