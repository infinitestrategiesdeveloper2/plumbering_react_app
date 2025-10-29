import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#0A3D62] to-[#05233A] text-white py-24 px-6 md:px-60">
      {/* Ambient Gradient Motion Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05)_0%,transparent_50%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Main Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-between items-center"
          >
            <h2 className="text-3xl font-bold tracking-wide">Get In Touch</h2>
            <div className="flex gap-3">
              {["card.png", "visa.png", "paypal.png", "stripe.png", "americanexpress.png"].map(
                (card, idx) => (
                  <motion.img
                    key={idx}
                    src={`./cards/${card}`}
                    alt={card}
                    className="w-10 h-8 opacity-80 hover:opacity-100 transition-transform duration-200"
                    whileHover={{ scale: 1.2 }}
                  />
                )
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-3 text-gray-200 text-sm md:text-base"
          >
            <p className="flex items-center gap-2 hover:text-amber-300 transition">
              <MapPin className="w-5 text-amber-400" /> 732 Eaton St, Elizabeth, NJ 07202-1618
            </p>
            <p className="flex items-center gap-2 hover:text-amber-300 transition">
              <Mail className="w-5 text-amber-400" /> info@digital-sprints.com
            </p>
            <p className="flex items-center gap-2 hover:text-amber-300 transition">
              <Phone className="w-5 text-amber-400" /> +1 908-314-2247
            </p>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-sm text-gray-400 mt-4"
          >
            © 2025 Digital Sprints — Refund Policy
          </motion.p>
        </motion.div>

        {/* Right Section (Newsletter) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-lg flex flex-col gap-6"
        >
          <motion.h1
            whileHover={{ scale: 1.03 }}
            className="text-3xl font-extrabold text-amber-400"
          >
            LOGO
          </motion.h1>

          <p className="text-md text-gray-100 leading-relaxed opacity-90 font-medium">
            Subscribe to get the latest updates and expert insights directly in your inbox.
          </p>

          {/* Email Form */}
          <motion.form
            className="flex w-full mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 px-4 rounded-l-2xl border border-gray-300 bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#FBBF24" }}
              transition={{ duration: 0.2 }}
              className="bg-amber-400 text-[#0A3D62] px-6 rounded-r-2xl flex items-center justify-center font-semibold"
            >
              <MoveRight className="w-5" strokeWidth={1.5} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
