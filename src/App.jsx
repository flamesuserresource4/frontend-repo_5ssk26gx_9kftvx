import { useState } from 'react'
import { Leaf, Sprout, Flower2, Trees, Sun, Droplets, Hammer, Phone, Star } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
              <Leaf className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <span className="block font-semibold text-gray-900">Emerald Oasis</span>
              <span className="block text-xs text-gray-500">Dubai Landscaping</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-green-700 transition">Services</a>
            <a href="#portfolio" className="hover:text-green-700 transition">Portfolio</a>
            <a href="#testimonials" className="hover:text-green-700 transition">Testimonials</a>
            <a href="#contact" className="hover:text-green-700 transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+971500000000" className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-green-700 transition">
              <Phone className="h-4 w-4" />
              +971 50 000 0000
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-green-50" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a href="#services" className="px-3 py-2 rounded hover:bg-green-50">Services</a>
              <a href="#portfolio" className="px-3 py-2 rounded hover:bg-green-50">Portfolio</a>
              <a href="#testimonials" className="px-3 py-2 rounded hover:bg-green-50">Testimonials</a>
              <a href="#contact" className="px-3 py-2 rounded hover:bg-green-50">Contact</a>
              <a href="tel:+971500000000" className="px-3 py-2 rounded bg-green-600 text-white inline-flex items-center gap-2 justify-center"><Phone className="h-4 w-4" /> +971 50 000 0000</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-green-100 bg-white/60 p-6 hover:border-green-200 hover:shadow-lg transition-all">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white shadow-md">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}

function Testimonial({ name, area, quote }) {
  return (
    <div className="rounded-2xl border border-green-100 bg-white/70 p-6">
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />))}
      </div>
      <p className="mt-3 text-gray-700 italic">“{quote}”</p>
      <p className="mt-4 text-sm font-medium text-gray-900">{name}</p>
      <p className="text-xs text-gray-500">{area}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-200/50 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-medium">
              <Sun className="h-3.5 w-3.5" />
              Designed for Dubai's climate
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Crafting lush outdoor escapes across Dubai
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Premium landscaping and garden maintenance tailored to UAE weather. From villa lawns to rooftop terraces, we design, build, and care for vibrant green spaces that thrive all year round.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-white font-medium shadow hover:bg-green-700 transition">
                Get a free site visit
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-green-300 bg-white px-5 py-3 text-green-800 font-medium hover:border-green-400 transition">
                View recent work
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><Droplets className="h-4 w-4 text-green-700" /> Water-wise irrigation</div>
              <div className="inline-flex items-center gap-2"><Hammer className="h-4 w-4 text-green-700" /> Turnkey build</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-green-200">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
                alt="Modern Dubai villa garden with lush greenery"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-green-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-600 text-white inline-flex items-center justify-center"><Trees className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm font-semibold">Over 500+ projects</p>
                  <p className="text-xs text-gray-500">Across Dubai & Abu Dhabi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">End-to-end landscaping services</h2>
            <p className="mt-2 text-gray-600">Design, construction, and maintenance built for the desert climate.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={Sprout} title="Garden Design" desc="Bespoke concepts with native plants, shade solutions, and elegant hardscapes." />
            <FeatureCard icon={Droplets} title="Irrigation & Lighting" desc="Smart drip systems and ambient lighting that save water and elevate mood." />
            <FeatureCard icon={Hammer} title="Build & Hardscaping" desc="Pergolas, decks, paving, BBQ areas, and water features with premium finishes." />
            <FeatureCard icon={Flower2} title="Lawn & Planting" desc="Drought-tolerant turf, palms, and flowering accents for year-round color." />
            <FeatureCard icon={Trees} title="Villa & Rooftop" desc="Private villas, rooftops, and community spaces tailored to your lifestyle." />
            <FeatureCard icon={Sun} title="Maintenance" desc="Weekly care plans to keep your garden thriving through summer heat." />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-green-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold">Recent transformations</h2>
              <p className="mt-2 text-gray-600">A glimpse of villas and terraces we've brought to life.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-green-300 bg-white px-4 py-2 text-sm font-medium text-green-800 hover:border-green-400">Book a consultation</a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1501850504904-73c8c3a1f596?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1523419409543-a5e549c1cfb3?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1474696100102-01a2d6044f95?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1494797262163-102fae527c62?q=80&w=1600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-green-200">
                <img src={src} alt="Project" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Loved by homeowners across UAE</h2>
            <p className="mt-2 text-gray-600">Real feedback from recent projects in Dubai, Jumeirah, and Arabian Ranches.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Testimonial name="Aisha K." area="Arabian Ranches" quote="The team transformed our backyard into a cool, usable space even in peak summer." />
            <Testimonial name="Omar S." area="Palm Jumeirah" quote="Elegant design and professional execution. Our villa looks like a resort now." />
            <Testimonial name="Lina D." area="Dubai Hills" quote="Efficient maintenance and water-wise planting that still looks lush." />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-green-200 bg-white/80 p-8 sm:p-12 shadow-[0_10px_40px_-15px_rgba(16,185,129,0.35)]">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">Ready to grow your outdoor space?</h3>
                <p className="mt-2 text-gray-600">Request a free site visit anywhere in Dubai. We'll assess your space and share a tailored plan.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="tel:+971500000000" className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white font-medium shadow hover:bg-green-700"><Phone className="h-5 w-5" /> Call now</a>
                  <a href="mailto:hello@emerald-oasis.ae" className="inline-flex items-center gap-2 rounded-xl border border-green-300 bg-white px-5 py-3 text-green-800 font-medium hover:border-green-400">Email us</a>
                </div>
              </div>
              <form className="grid gap-3">
                <input className="w-full rounded-lg border border-green-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Full name" />
                <input className="w-full rounded-lg border border-green-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Phone number" />
                <input className="w-full rounded-lg border border-green-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Community (e.g., Arabian Ranches)" />
                <textarea rows="4" className="w-full rounded-lg border border-green-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Tell us about your space..." />
                <button type="button" className="mt-1 inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700">Request site visit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white"><Leaf className="h-5 w-5" /></span>
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} Emerald Oasis Landscaping LLC — Dubai</p>
            </div>
            <div className="text-sm text-gray-600">TRADE LICENSE 123456 • Fully insured</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
