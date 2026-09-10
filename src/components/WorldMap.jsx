import { FaAirbnb, FaHome, FaBed, FaBuilding, FaKey, FaMountain, FaLeaf, FaGlobeEurope, FaCouch } from 'react-icons/fa'
import { SiBookingdotcom, SiExpedia } from 'react-icons/si'

// lon/lat → % position on equirectangular map
function toPercent(lon, lat) {
  return {
    x: ((lon + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100,
  }
}

// Loci & Lore palette
const P = {
  stone:     '#3D2B1A',
  earth:     '#8C6E52',
  clay:      '#B8956A',
  ochre:     '#C4A882',
  sky:       '#8A9EBA',
  dusk:      '#2E3D5C',
  nightfall: '#1E2A3A',
}

const BADGES = [
  // North America
  { Icon: SiExpedia,       color: P.dusk,      lon: -122.3, lat: 47.6,  delay: '0s',    label: 'Expedia' },           // Seattle
  { Icon: FaHome,          color: P.stone,     lon: -104.9, lat: 39.7,  delay: '0.3s',  label: 'Furnished Finder' },  // Denver
  { Icon: FaKey,           color: P.clay,      lon: -97.7,  lat: 30.3,  delay: '0.6s',  label: 'Kopa' },              // Austin
  { Icon: FaCouch,         color: P.earth,     lon: -86.8,  lat: 36.2,  delay: '0.9s',  label: 'Landing' },           // Nashville
  { Icon: FaBuilding,      color: P.nightfall, lon: -74.0,  lat: 40.7,  delay: '1.2s',  label: 'Blueground' },        // NYC
  { Icon: FaAirbnb,        color: P.ochre,     lon: -80.2,  lat: 25.8,  delay: '1.5s',  label: 'Airbnb' },            // Miami
  // South America
  { Icon: FaAirbnb,        color: P.clay,      lon: -74.1,  lat: 4.7,   delay: '0.2s',  label: 'Airbnb' },            // Bogotá
  { Icon: FaAirbnb,        color: P.earth,     lon: -43.2,  lat: -22.9, delay: '0.5s',  label: 'Airbnb' },            // Rio
  { Icon: SiBookingdotcom, color: P.dusk,      lon: -58.4,  lat: -34.6, delay: '0.8s',  label: 'Booking.com' },       // Buenos Aires
  { Icon: FaGlobeEurope,   color: P.stone,     lon: -70.6,  lat: -33.5, delay: '1.1s',  label: 'HomeToGo' },          // Santiago
  // Europe
  { Icon: FaMountain,      color: P.sky,       lon: -4.5,   lat: 57.2,  delay: '0.2s',  label: 'CoolStays' },         // Scotland
  { Icon: FaAirbnb,        color: P.clay,      lon: 2.3,    lat: 48.9,  delay: '0.5s',  label: 'Airbnb' },            // Paris
  { Icon: SiBookingdotcom, color: P.nightfall, lon: 4.9,    lat: 52.4,  delay: '0.8s',  label: 'Booking.com' },       // Amsterdam
  { Icon: FaGlobeEurope,   color: P.dusk,      lon: 13.4,   lat: 52.5,  delay: '1.1s',  label: 'HomeToGo' },          // Berlin
  { Icon: FaLeaf,          color: P.earth,     lon: 9.0,    lat: 40.0,  delay: '1.4s',  label: 'Ecobnb' },            // Sardinia
  // Africa
  { Icon: FaAirbnb,        color: P.ochre,     lon: -7.9,   lat: 31.6,  delay: '0.3s',  label: 'Airbnb' },            // Marrakech
  { Icon: SiBookingdotcom, color: P.stone,     lon: 36.8,   lat: -1.3,  delay: '0.6s',  label: 'Booking.com' },       // Nairobi
  { Icon: FaLeaf,          color: P.sky,       lon: 18.4,   lat: -33.9, delay: '0.9s',  label: 'Ecobnb' },            // Cape Town
  { Icon: FaMountain,      color: P.clay,      lon: -0.2,   lat: 5.6,   delay: '1.2s',  label: 'CoolStays' },         // Accra
  // Middle East
  { Icon: SiBookingdotcom, color: P.dusk,      lon: 55.3,   lat: 25.2,  delay: '0.4s',  label: 'Booking.com' },       // Dubai
  // Asia
  { Icon: FaBed,           color: P.nightfall, lon: 100.5,  lat: 13.8,  delay: '0.7s',  label: 'Agoda' },             // Bangkok
  { Icon: FaBed,           color: P.earth,     lon: 103.8,  lat: 1.3,   delay: '1.0s',  label: 'Agoda' },             // Singapore
  { Icon: FaAirbnb,        color: P.ochre,     lon: 72.9,   lat: 19.1,  delay: '1.3s',  label: 'Airbnb' },            // Mumbai
  { Icon: SiBookingdotcom, color: P.sky,       lon: 139.7,  lat: 35.7,  delay: '0.5s',  label: 'Booking.com' },       // Tokyo
  { Icon: FaAirbnb,        color: P.clay,      lon: 115.2,  lat: -8.4,  delay: '1.0s',  label: 'Airbnb' },            // Bali
  { Icon: SiExpedia,       color: P.stone,     lon: 126.9,  lat: 37.6,  delay: '0.8s',  label: 'Expedia' },           // Seoul
  // Australia
  { Icon: FaAirbnb,        color: P.earth,     lon: 151.2,  lat: -33.9, delay: '0.6s',  label: 'Airbnb' },            // Sydney
  { Icon: SiBookingdotcom, color: P.dusk,      lon: 144.9,  lat: -37.8, delay: '0.9s',  label: 'Booking.com' },       // Melbourne
  { Icon: FaMountain,      color: P.sky,       lon: 133.8,  lat: -25.3, delay: '1.2s',  label: 'CoolStays' },         // Central Australia
]

export default function WorldMap() {
  return (
    <div className="w-full px-6 md:px-16 pt-2 pb-6 max-w-5xl mx-auto flex flex-col items-center">
      <div className="max-w-3xl w-full text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">
          your worldwide retreat
        </p>
        <p className="text-sm font-light text-stone/70 mb-6 text-left md:text-center">
          Let's collab on how we can make your listing stand out.
        </p>
      </div>

      <div
        className="relative w-full rounded-lg overflow-hidden"
        style={{ paddingBottom: '50%' }}
      >
        <img
          src="/world-map.svg"
          alt="World map"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'fill' }}
        />

        {BADGES.map((badge, i) => {
          const { x, y } = toPercent(badge.lon, badge.lat)
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
            >
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ animationDelay: badge.delay, backgroundColor: badge.color }}
              />
              <span
                className="relative flex items-center justify-center w-4 h-4 md:w-7 md:h-7 rounded-full shadow-sm"
                style={{
                  background: '#F5F0E8',
                  border: `1.5px solid ${badge.color}`,
                }}
                title={badge.label}
              >
                <badge.Icon className="w-2 h-2 md:w-3.5 md:h-3.5" color={badge.color} />
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
