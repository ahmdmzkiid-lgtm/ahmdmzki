import { motion } from 'framer-motion'
import { Copy, Mail, ExternalLink, Check } from 'lucide-react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export const Contact = () => {
  const [copied, setCopied] = useState(false)
  const email = 'ahmadmuzaki.id@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-32 bg-black px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Available for Freelance</span>
            </div>
            
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">Mulai Diskusi</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter-pro text-white mb-8">
              Siap Memulai <br />
              <span className="text-zinc-500">Kolaborasi Baru?</span>
            </h3>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm mb-12">
              Jangan ragu untuk menyapa. Saya selalu antusias mendiskusikan ide-ide kreatif dan tantangan teknis baru.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">Lokasi</span>
                <span className="text-xl font-medium text-white">Depok, Indonesia</span>
              </div>
              <div className="flex gap-6 pt-4">
                {[
                  { Icon: FaGithub, href: 'https://github.com/ahmdmzkiid-lgtm', label: 'GitHub' },
                  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmad-muzaki-3863813ba?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
                  { Icon: FaInstagram, href: 'https://www.instagram.com/ahmdmzki12?igsh=dGp6M2g2d2M2anky', label: 'Instagram' }
                ].map(({ Icon, href, label }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label={label}>
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={copyToClipboard}
              className="glass-panel p-8 cursor-pointer group hover:bg-white/[0.03] transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-zinc-500" />}
              </div>
              <h4 className="text-sm font-medium uppercase tracking-widest text-zinc-500 mb-2">Email Utama</h4>
              <p className="text-2xl font-bold text-white tracking-tight">{email}</p>
              <p className="text-[10px] text-zinc-500 mt-4 uppercase tracking-[0.2em]">{copied ? 'Copied to Clipboard!' : 'Click to Copy'}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://wa.me/6285780171571"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-panel p-6 hover:bg-[#25D366]/10 transition-all group"
              >
                <FaWhatsapp className="w-8 h-8 text-zinc-500 group-hover:text-[#25D366] mb-4 transition-colors" />
                <h4 className="text-sm font-bold text-white uppercase tracking-tighter">WhatsApp</h4>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 uppercase tracking-widest mt-2 group-hover:text-white">
                  Fast Reply <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ahmad-muzaki-3863813ba?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-panel p-6 hover:bg-[#0077b5]/10 transition-all group"
              >
                <FaLinkedin className="w-8 h-8 text-zinc-500 group-hover:text-[#0077b5] mb-4 transition-colors" />
                <h4 className="text-sm font-bold text-white uppercase tracking-tighter">LinkedIn</h4>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 uppercase tracking-widest mt-2 group-hover:text-white">
                  Connect <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


