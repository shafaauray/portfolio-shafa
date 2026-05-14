import { motion } from "framer-motion"
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-20 bg-brownDark text-cream overflow-hidden"
    >
      {/* BATIK TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      {/* SOFT GOLD GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — CONTACT ME */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serifDisplay font-bold mb-6">
            Contact <span className="text-gold">Me</span>
          </h2>

          <p className="text-cream/70 mb-10 leading-relaxed">
            Let’s connect and collaborate.
            Whether it’s about projects, opportunities, or just saying hi —
            my inbox and socials are always open.
          </p>

          <div className="flex flex-wrap gap-4">
            <SocialButton
              icon={<FaInstagram />}
              label="Instagram"
              href="https://www.instagram.com/shafaauray/?hl=id"
            />

            <SocialButton
              icon={<FaGithub />}
              label="GitHub"
              href="https://github.com/shafaauray"
            />

            <SocialButton
              icon={<FaLinkedin />}
              label="LinkedIn"
              href="https://www.linkedin.com/in/shafaaurayogadiasa/"
            />

            <SocialButton
              icon={<FaWhatsapp />}
              label="WhatsApp"
              href="https://wa.me/qr/XSBCJJHKEDTUI1"
            />

            <SocialButton
              icon={<FaEnvelope />}
              label="Email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shafaaurayogadiasa@gmail.com"
            />
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          action="https://formsubmit.co/shafaaurayogadiasa@gmail.com"
          method="POST"
          className="bg-card border border-gold/20 rounded-3xl p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.15)]"
        >
          <h3 className="text-3xl font-semibold mb-8 text-gold">
            Get In Touch
          </h3>

          {/* HIDDEN CONFIG */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              type="text"
              name="First Name"
              placeholder="First Name"
            />

            <Input
              type="text"
              name="Last Name"
              placeholder="Last Name"
            />

            <Input
              type="email"
              name="Email"
              placeholder="Email Address"
            />

            <Input
              type="text"
              name="Phone"
              placeholder="Phone No."
            />
          </div>

          <textarea
            name="Message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full mb-8 px-5 py-4 rounded-2xl bg-brownSoft border border-gold/20 placeholder-cream/50 focus:outline-none focus:border-gold transition"
          />

          <button
            type="submit"
            className="px-10 py-4 bg-gold text-brownDark font-semibold rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  )
}

/* COMPONENTS */

function SocialButton({ icon, label, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-brownSoft border border-gold/20 hover:border-gold transition-all"
    >
      <span className="text-xl text-gold">{icon}</span>
      <span className="text-sm font-medium text-cream">{label}</span>
    </motion.a>
  )
}

function Input({ type = "text", name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="w-full px-5 py-4 rounded-2xl bg-brownSoft border border-gold/20 placeholder-cream/50 focus:outline-none focus:border-gold transition"
    />
  )
}

export default Contact