'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  GraduationCap,
  Plane,
  FileText,
  BadgeCheck,
  Phone,
  ChevronRight,
} from 'lucide-react'

const countries = [
  {
    name: 'Canada',
    image:
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
  },
  {
    name: 'United Kingdom',
    image:
      'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
  },
  {
    name: 'Australia',
    image:
      'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg',
  },
  {
    name: 'Germany',
    image:
      'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg',
  },
]

const services = [
  {
    title: 'Career Counselling',
    icon: GraduationCap,
  },
  {
    title: 'University Selection',
    icon: Globe,
  },
  {
    title: 'Visa Assistance',
    icon: BadgeCheck,
  },
  {
    title: 'SOP & Documentation',
    icon: FileText,
  },
]

const process = [
  'Free Consultation',
  'Profile Evaluation',
  'University Selection',
  'Application Process',
  'Visa Guidance',
  'Departure Support',
]

export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">
            StudyAxis
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>

            <a href="#countries" className="hover:text-blue-600 transition">
              Destinations
            </a>

            <a href="#process" className="hover:text-blue-600 transition">
              Process
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/919148528115"
            target="_blank"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Free Consultation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center relative pt-32 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BadgeCheck size={16} />
              Trusted Study Abroad Guidance
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Study Abroad
              <span className="text-blue-600 block">
                With Confidence
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
              Personalized guidance for university admissions,
              scholarships, visas, and global education opportunities.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/919148528115"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl font-semibold transition flex items-center gap-2"
              >
                Book Free Consultation
                <ChevronRight size={18} />
              </a>

              <a
                href="#countries"
                className="border border-gray-300 hover:bg-gray-100 px-7 py-4 rounded-2xl font-semibold transition"
              >
                Explore Countries
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 text-sm text-gray-600">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  500+
                </h3>
                Students Guided
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  98%
                </h3>
                Visa Success
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  15+
                </h3>
                Destinations
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg"
              alt="student"
              className="rounded-[40px] shadow-2xl w-full object-cover h-[650px]"
            />

            <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-5 flex items-center gap-4">
              <Plane className="text-blue-600" />

              <div>
                <h4 className="font-semibold">Visa Assistance</h4>

                <p className="text-sm text-gray-500">
                  End-to-end support
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white shadow-xl rounded-2xl p-5 flex items-center gap-4">
              <Globe className="text-yellow-500" />

              <div>
                <h4 className="font-semibold">
                  Global Universities
                </h4>

                <p className="text-sm text-gray-500">
                  Multiple destinations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Our Services
            </h2>

            <p className="text-gray-600 mt-4">
              Complete support for your study abroad journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Expert guidance tailored to your academic and
                    career goals.
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section id="countries" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Popular Study Destinations
            </h2>

            <p className="text-gray-600 mt-4">
              Explore top countries for international education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-[32px] overflow-hidden shadow-xl group"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-[450px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold">
                    {country.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Process
          </h2>

          <p className="text-gray-600 mb-16">
            A simple and transparent process to help you achieve
            your dream university.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-blue-50 rounded-3xl p-8 border border-blue-100"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[40px] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready To Start Your
                <span className="text-blue-400 block">
                  Global Journey?
                </span>
              </h2>

              <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
                Get expert guidance for admissions,
                scholarships, visas, and university selection.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a
                  href="tel:+919148528115"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="mailto:muhammaddilkash7@gmail.com"
                  className="border border-white/30 hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              StudyAxis
            </h3>

            <p className="leading-relaxed text-sm">
              Helping students achieve their dreams of studying
              abroad with expert guidance and personalized
              support.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Destinations
            </h4>

            <ul className="space-y-2 text-sm">
              <li>Canada</li>
              <li>Australia</li>
              <li>United Kingdom</li>
              <li>Germany</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-sm">
              <li>📞 +91 9148528115</li>
              <li>✉️ muhammaddilkash7@gmail.com</li>
              <li>📍 Mangalore, Karnataka</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm">
          © 2026 StudyAxis. All rights reserved.
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919148528115"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition"
      >
        WhatsApp
      </a>
    </main>
  )
}