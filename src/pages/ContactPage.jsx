import { useState } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import { SiInstagram } from 'react-icons/si'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

export default function ContactPage() {
  const referralOptions = ['Social Media', 'Web Search', 'Recommendation', 'Other']
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', location: '', referral: [], message: '' })

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleReferralChange = (option) => {
    setForm(f => ({
      ...f,
      referral: f.referral.includes(option)
        ? f.referral.filter(r => r !== option)
        : [...f.referral, option]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Loci & Lore enquiry from ${form.firstName} ${form.lastName}`)
    const body = encodeURIComponent(
      `Hi Loci & Lore,\n\nMy name is ${form.firstName} ${form.lastName} and my email is ${form.email}.\nCity / Neighbourhood: ${form.location}\nHow they heard about us: ${form.referral.join(', ')}\n\n${form.message}`
    )
    window.location.href = `mailto:juliaktucker@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full bg-transparent border border-stone/20 rounded-sm px-4 py-3 text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:border-terra transition-colors duration-200'
  const labelClass = 'block text-sm text-stone/40 mb-1'

  return (
    <PageTransition>
      <FadeIn>
        <section id="contact" className="py-24 px-6 md:px-16 pt-32 max-w-5xl mx-auto border-t border-stone/10">
          <div className="mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">Let's Talk</p>
            <h1
              className="text-2xl md:text-3xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: '#3D2B1A', fontStyle: 'italic' }}
            >
              Start a project
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <p className="text-sm font-light leading-relaxed text-stone/60 mb-8">
                Tell us about your space and we'll get back to you within 48 hours.
              </p>
              <div className="flex items-center gap-3 mt-1">
                <MdEmail size={22} style={{ color: '#8A9EBA' }} />
                <a
                  href="mailto:juliaktucker@gmail.com"
                  className="text-sm text-stone/50 hover:text-stone transition-colors duration-200"
                >
                  juliaktucker@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <MdPhone size={22} style={{ color: '#8A9EBA' }} />
                <a
                  href="tel:+447533936649"
                  className="text-sm text-stone/50 hover:text-stone transition-colors duration-200"
                >
                  +44 7533 936649
                </a>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <SiInstagram size={22} style={{ color: '#8A9EBA' }} />
                <a
                  href="https://www.instagram.com/lociandlore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone/50 hover:text-stone transition-colors duration-200"
                >
                  @lociandlore
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First name</label>
                  <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last name</label>
                  <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Your email</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City or neighbourhood</label>
                <input type="text" name="location" placeholder="Where are you located?" value={form.location} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>How did you hear about Loci & Lore?</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {referralOptions.map(option => {
                    const checked = form.referral.includes(option)
                    return (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <span
                          onClick={() => handleReferralChange(option)}
                          className="w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors duration-200"
                          style={{ borderColor: '#8A9EBA', backgroundColor: checked ? '#8A9EBA' : 'transparent' }}
                        >
                          {checked && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className={`text-sm transition-colors duration-200 ${checked ? 'text-stone/70' : 'text-stone/40'}`}>{option}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
              <div>
                <label className={labelClass}>Tell us about your space</label>
                <textarea name="message" required rows={4} maxLength={700} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                <p className="text-xs text-stone/30 text-right mt-1">{form.message.length} of 700 max characters</p>
              </div>
              <button
                type="submit"
                className="mt-2 text-xs tracking-widest uppercase text-terra border border-terra/60 px-8 py-3 rounded-full hover:bg-terra hover:border-terra hover:text-offwhite transition-all duration-200"
              >
                Send Message →
              </button>
            </form>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
