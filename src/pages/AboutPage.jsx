import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

export default function AboutPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">Who We Are</p>
            <h1
              className="text-2xl md:text-4xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              About Us
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-light text-stone/60" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
              Rooted in place, shaped by its stories.
            </p>
          </div>

          {/* 5 Pillars */}
          <div className="flex flex-nowrap justify-between gap-2 md:gap-6 border-b border-stone/10 pb-12 mb-16">
            {[
              { label: 'Storytelling',   src: '/storytelling.mp4',  style: {} },
              { label: 'Wellbeing',      src: '/wellbeing.mp4',      style: {} },
              { label: 'Sustainability', src: '/sustainability.mp4', style: { objectPosition: '50% 30%' } },
              { label: 'Context',        src: '/context.mp4',        style: { objectPosition: '50% 70%' } },
              { label: 'Craftsmanship',  src: '/craftsmanship.mp4',  style: {} },
            ].map(({ label, src, style }) => (
              <div key={label} className="relative">
                <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border border-stone/10 bg-stone/5 shrink-0 overflow-hidden">
                  <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" style={style} />
                </div>
                <svg
                  className="absolute pointer-events-none"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '180%', height: '180%' }}
                  viewBox="0 0 160 160"
                  overflow="visible"
                >
                  <defs>
                    <path id={`arc-${label}`} d="M 22,80 A 58,58 0 1,1 138,80" />
                  </defs>
                  <text fontSize="13" fontWeight="600" letterSpacing="2.5" fill="#3D2B1A" fontFamily="var(--font-display)" transform="rotate(-20, 80, 80)" className="md:hidden">
                    <textPath href={`#arc-${label}`} startOffset="50%" textAnchor="middle">
                      {label}
                    </textPath>
                  </text>
                  <text fontSize="11" fontWeight="600" letterSpacing="2.5" fill="#3D2B1A" fontFamily="var(--font-display)" transform="rotate(-20, 80, 80)" className="hidden md:inline">
                    <textPath href={`#arc-${label}`} startOffset="50%" textAnchor="middle">
                      {label}
                    </textPath>
                  </text>
                </svg>
              </div>
            ))}
          </div>

          {/* Guest Room Tagline */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold pt-1" style={{ color: '#8A9EBA' }}>The Guest Room</p>
            <p className="text-xs md:text-sm font-light leading-relaxed text-justify italic" style={{ color: '#8A9EBA' }}>
              "A space designed with the same care and intention as a home, where every detail is considered to welcome, comfort, and connect."
            </p>
          </div>

          {/* Who We Are */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Who We Are</p>
              <div className="w-full aspect-[5/4] md:aspect-[3/4] overflow-hidden rounded-sm">
                <img src="/who-we-are.jpg" alt="A place along the way" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Loci & Lore is an interior design studio creating soulful, personalised spaces for short-term rentals, hospitality, and residential interiors. We bring the feeling of a thoughtfully designed guest room to life. Spaces that welcome people in and make them feel at home.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Rooted in human-centred design and placemaking, we create interiors that respond to both the people who use them and the places they belong to.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                We believe great design is felt as much as it is seen. Through careful consideration of layout, light, flow, colour and materiality, we create spaces that feel intuitive, grounded, and connected. Designed for rest, connection, and everyday living.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Every Loci & Lore project is crafted to be beautiful, functional, and enduring. Spaces that photograph beautifully, live effortlessly, and leave a lasting impression.
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-t border-stone/10 pt-12 mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Our Story</p>
              <div className="w-full aspect-[5/4] md:aspect-auto overflow-hidden rounded-sm">
                <img src="/karoo-road.jpg" alt="The open road" className="w-full h-full md:h-auto object-cover object-center md:object-contain" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Loci & Lore was born from a love of travel, thoughtful spaces, and the landscapes that shape how we experience place.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                The name reflects the heart of our brand: "Loci," Latin for place, and "Lore," the stories a place carries. Together, Loci & Lore represents the idea that every space holds a story worth telling. Interiors that welcome, restore, and feel deeply connected to their surroundings.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Inspired by the landscapes, cultures, and everyday rituals we encounter through travel, we create interiors that feel grounded, intentional, and full of character.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Through travel, we discovered that the spaces we remember most are not always the grandest, but the ones that make us feel something. The guest room that feels thoughtfully prepared, the home that reflects its surroundings, and the details that transform a stay into an experience.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Loci & Lore exists to create spaces with a story. Interiors that balance beauty and function, celebrate their context, and allow people to feel a sense of belonging wherever they are.
              </p>
            </div>
          </div>

          {/* Founder */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-t border-stone/10 pt-12 mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">The Founder</p>
              <div className="w-full aspect-[5/4] overflow-hidden rounded-sm md:h-64 md:aspect-auto">
                <img src="/founder-mobile.jpg" alt="Jules Tucker" className="w-full h-full object-cover md:hidden" style={{ objectPosition: 'center 70%' }} />
                <img src="/founder.jpg" alt="Jules Tucker" className="hidden md:block w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Hi, I'm Jules!
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Born in sunny South Africa, in the coastal town of Ballito, I grew up with a love for the outdoors, travel, and the way spaces and places can make us feel. This curiosity led me to pursue Interior Architecture, graduating with an Honours degree from the University of Pretoria.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                My passion for design, adventure, and discovering new places has taken me around the world, shaping the way I see and experience spaces. Through my work, I have gained experience designing luxury residential and hospitality interiors, creating spaces that are thoughtful, welcoming, and connected to the people who experience them.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                My approach is shaped by a belief that interiors should support the way people live, move, gather, and rest. I'm drawn to spaces that feel effortless yet intentional. Where thoughtful planning, materials, colour, and detail come together to create warmth and personality.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                With experience across both design and construction, I bring a balance of creativity and practicality to every project, creating spaces that are timeless, functional, and deeply personal.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                At Loci & Lore, every project is an opportunity to create something meaningful. A space with character, purpose, and a story to tell.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-t border-stone/10 pt-12">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Credentials</p>
            <ul className="space-y-3">
              {[
                'Honours in Interior Architecture — Cum Laude',
                'LEED Green Associate',
                '3+ Years Professional Practice',
                'Luxury Residential & Hospitality Projects Worldwide',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs md:text-sm font-light text-stone/70">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
