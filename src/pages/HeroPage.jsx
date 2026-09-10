import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import WorldMap from '../components/WorldMap'
import ImageBannerScroll from '../components/ImageBannerScroll'

const stats = [
  { value: '5★', label: 'Reviews' },
  { value: 'Higher', label: 'Nightly Rates' },
  { value: 'Faster', label: 'Bookings' },
]

export default function HeroPage() {
  return (
    <PageTransition>
      <FadeIn>
        {/* Cover photo with heading overlay */}
        <div className="relative w-full h-[45vh] md:h-[100vh] overflow-hidden mt-14 md:mt-0">
          <img src="/cover.jpg" alt="A thoughtfully designed retreat" className="hidden md:block w-full h-full object-cover object-[center_60%]" />
          <img src="/cover-mobile.jpg" alt="A thoughtfully designed retreat" className="block md:hidden w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-start justify-center text-center px-6 md:px-16 pt-8 md:pt-20">
            <h1
              className="text-xl md:text-4xl font-light whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
            >
              Interiors that turn a rental into a retreat.
            </h1>
          </div>
        </div>

        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-6 md:px-16 pt-10 pb-8 max-w-5xl mx-auto text-center">
          <div className="max-w-3xl w-full">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">
              Interior Design<br className="sm:hidden" /> for Short-Term Rentals
            </p>
            <p className="text-sm font-light leading-relaxed text-stone/70 mb-10 text-left md:text-center">
              Interior design & furnishing packages built for rental hosts who want<br className="hidden sm:block" /> better photos, stronger reviews & higher nightly rates.
            </p>
            <div className="flex flex-row gap-4 flex-wrap justify-center">
              <Link
                to="/services"
                className="text-xs tracking-widest lowercase bg-stone text-offwhite px-8 py-3 rounded-full hover:bg-stone/80 transition-colors duration-200"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="text-xs tracking-widest lowercase text-terra border border-terra/60 px-8 py-3 rounded-full hover:bg-terra hover:border-terra hover:text-offwhite transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

        </section>

        {/* World map */}
        <WorldMap />

        {/* Image banner */}
        <div className="px-6 md:px-16 max-w-5xl mx-auto pt-10 pb-8 text-left md:text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2 text-center">A visual diary of guest spaces encountered through travel</p>
          <p className="text-sm font-light text-stone/70">Experiencing, learning, and gathering inspiration from places around the world.<br className="hidden md:block" /> Bringing those lessons back to thoughtfully elevate your space.</p>
        </div>
        <ImageBannerScroll />

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 px-6 md:px-16 pb-8 max-w-5xl mx-auto border-t border-stone/10 pt-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="text-2xl font-light"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
              >
                {value}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Spacer before footer */}
        <div className="pb-8" />
      </FadeIn>
    </PageTransition>
  )
}
