import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',     to: '/'         },
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about'    },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact',  to: '/contact'  },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase transition-colors duration-200 ${
      isActive ? 'text-stone' : 'text-stone/50 hover:text-stone'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#F5F0E8' }}>
      <nav className="relative h-14 flex items-center justify-center">
        <Link
          to="/"
          className="text-sm font-light tracking-widest uppercase transition-colors duration-200 text-stone/60 hover:text-stone"
        >
          Loci & Lore
        </Link>

        {/* Menu toggle — pinned to far right */}
        <button
          className="absolute right-4 flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`block w-5 h-px bg-stone transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-stone transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-stone transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Dropdown — always anchored to far right of screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
            className="absolute top-14 right-0 border border-stone/10 rounded-sm py-6 px-8 shadow-sm"
            style={{ backgroundColor: '#F5F0E8' }}
          >
            <ul className="flex flex-col gap-5 items-end">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <NavLink to={to} className={linkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
