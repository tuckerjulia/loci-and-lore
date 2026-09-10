import { SiInstagram } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const socials = [
  { icon: SiInstagram, href: 'https://www.instagram.com/lociandlore/', label: '@lociandlore' },
  { icon: MdEmail,     href: 'mailto:juliaktucker@gmail.com',          label: 'juliaktucker@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-16 py-10 max-w-5xl mx-auto border-t border-stone/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-stone/30 tracking-wide">
          © {year} Loci & Lore. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:opacity-70 transition-opacity duration-200"
            >
              <Icon size={22} style={{ color: '#8A9EBA' }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
