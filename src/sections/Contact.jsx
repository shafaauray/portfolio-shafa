import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FiCheckCircle, FiAlertCircle, FiSend } from "react-icons/fi"

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"
import SectionHeading from "../components/SectionHeading"

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/shafaaurayogadiasa/" },
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/shafaauray" },
  { icon: <FaEnvelope />, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=shafaaurayogadiasa@gmail.com" },
  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/qr/XSBCJJHKEDTUI1" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/shafaauray/" },
]

function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("sending")

    emailjs
      .sendForm(
        "service_xtes4fa",
        "template_imzlp9c",
        formRef.current,
        "x9yFf09iD6ZDwbfo6"
      )
      .then(
        () => {
          setStatus("success")
          formRef.current.reset()
        },
        (error) => {
          console.error(error?.text || error)
          setStatus("error")
        }
      )
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark text-cream overflow-hidden"
    >
      {/* BATIK TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      {/* SOFT GOLD GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gold/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
        {/* LEFT — CONTACT ME */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Let's work together"
            title="Contact"
            highlight="Me"
            description="Whether it's about projects, opportunities, or just saying hi, my inbox and socials are always open."
          />

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
            {socials.map((s) => (
              <SocialButton key={s.label} {...s} />
            ))}
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-gold/20 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.15)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gold">
            Get In Touch
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
            <Input type="text" name="first_name" placeholder="First Name" autoComplete="given-name" />
            <Input type="text" name="last_name" placeholder="Last Name" autoComplete="family-name" />
            <Input type="email" name="email" placeholder="Email Address" autoComplete="email" />
            <Input type="tel" name="phone" placeholder="Phone No." autoComplete="tel" />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            rows="5"
            required
            className="w-full mb-6 px-5 py-4 rounded-2xl bg-brownSoft text-cream border border-gold/20 placeholder-cream/50 focus:outline-none focus:border-gold transition resize-y"
          />

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-brownDark font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending..." : (<>Send Message <FiSend /></>)}
            </button>

            <div aria-live="polite" className="text-sm">
              {status === "success" && (
                <p className="flex items-center gap-2 text-emerald-400">
                  <FiCheckCircle /> Message sent successfully. Thank you!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-red-400">
                  <FiAlertCircle /> Failed to send. Please try again or email me directly.
                </p>
              )}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

/* COMPONENTS */

function SocialButton({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl bg-brownSoft border border-gold/20 hover:border-gold hover:-translate-y-0.5 transition-all"
    >
      <span className="text-xl text-gold">{icon}</span>
      <span className="text-sm font-medium text-cream">{label}</span>
    </a>
  )
}

function Input({ type = "text", name, placeholder, autoComplete }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      aria-label={placeholder}
      autoComplete={autoComplete}
      required
      className="w-full px-5 py-4 rounded-2xl bg-brownSoft text-cream border border-gold/20 placeholder-cream/50 focus:outline-none focus:border-gold transition"
    />
  )
}

export default Contact
