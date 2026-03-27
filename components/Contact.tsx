'use client'

import { useState, FormEvent } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ nom: '', organisation: '', email: '', sujet: '', message: '' })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/send-contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form as Record<string, string>).toString(),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ nom: '', organisation: '', email: '', sujet: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 section-padding bg-bg-primary border-t border-border-light">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent" />
              <span className="text-xs font-sans tracking-widest uppercase text-accent font-medium">
                Contact
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary leading-snug mb-5">
              Parlons de votre besoin
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-md">
              Que ce soit pour un projet en cours de définition, une question technique ou un
              accompagnement à la transition numérique - la première étape est un échange simple et sans engagement.
            </p>

            {/* Info blocks */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 border border-border-light">
                <div className="mt-0.5 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="#005F45"
                    strokeWidth="1.5"
                  >
                    <path d="M3 4h12v10H3z" />
                    <path d="M3 4l6 6 6-6" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-text-tertiary mb-1 tracking-wide uppercase">Email</p>
                  <a
                    href="mailto:contact@comoresdigital.com"
                    className="font-sans text-sm text-text-primary hover:text-accent transition-colors"
                  >
                    contact@comoresdigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-border-light">
                <div className="mt-0.5 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="#005F45"
                    strokeWidth="1.5"
                  >
                    <circle cx="9" cy="7.5" r="2.5" />
                    <path d="M9 2C6.24 2 4 4.24 4 7c0 4.25 5 9 5 9s5-4.75 5-9c0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-text-tertiary mb-1 tracking-wide uppercase">Localisation</p>
                  <p className="font-sans text-sm text-text-primary">
                    Union des Comores
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-border-light bg-accent-light">
                <div className="mt-0.5 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="#005F45"
                    strokeWidth="1.5"
                  >
                    <circle cx="9" cy="9" r="7" />
                    <path d="M9 5v4l3 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-text-tertiary mb-1 tracking-wide uppercase">Disponibilité</p>
                  <p className="font-sans text-sm text-text-primary">
                    Projets web, systèmes métier, accompagnement numérique, cybersécurité
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="border border-border-light p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-xs text-text-tertiary tracking-wide uppercase mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full font-sans text-sm text-text-primary placeholder-text-tertiary border border-border-light bg-bg-primary px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs text-text-tertiary tracking-wide uppercase mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                    placeholder="Entreprise, institution..."
                    className="w-full font-sans text-sm text-text-primary placeholder-text-tertiary border border-border-light bg-bg-primary px-4 py-3 outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs text-text-tertiary tracking-wide uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="votre@email.com"
                  className="w-full font-sans text-sm text-text-primary placeholder-text-tertiary border border-border-light bg-bg-primary px-4 py-3 outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs text-text-tertiary tracking-wide uppercase mb-2">
                  Sujet
                </label>
                <select
                  name="sujet"
                  required
                  value={form.sujet}
                  onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                  className="w-full font-sans text-sm text-text-secondary border border-border-light bg-bg-primary px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="">Sélectionner un domaine</option>
                  <option>Site web professionnel</option>
                  <option>Portail institutionnel</option>
                  <option>Solution SaaS ou système métier</option>
                  <option>Hébergement & infrastructure</option>
                  <option>Cybersécurité</option>
                  <option>Accompagnement & sensibilisation</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs text-text-tertiary tracking-wide uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez brièvement votre besoin ou votre projet..."
                  className="w-full font-sans text-sm text-text-primary placeholder-text-tertiary border border-border-light bg-bg-primary px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Honeypot anti-spam */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-sans text-sm px-6 py-3 bg-accent text-white hover:bg-[#004A36] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {status === 'success' && (
                <p className="font-sans text-sm text-accent text-center">
                  Message envoyé avec succès. Vous recevrez une confirmation par email.
                </p>
              )}
              {status === 'error' && (
                <p className="font-sans text-sm text-red-600 text-center">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
