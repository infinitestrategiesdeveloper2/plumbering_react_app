import React from "react";
import { motion } from "framer-motion";

function CallToAction() {
  return (
    <motion.div
    id="calltoaction"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-24 overflow-hidden bg-gray-100"
    >
      {/* Background Image */}
      <img
        src="calltoaction.png"
        alt="calltoactionbg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#0A3D62_0%,#0A3D62_60%,#062a46_100%)] mix-blend-multiply bg-size-[200%_200%]"
      />

      {/* Soft Glow Behind */}
      <div className="absolute inset-0 bg-[#0A3D62]/40 blur-[100px]" />

      {/* Floating Light Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-amber-300/10 blur-[60px]"
            animate={{
              x: [Math.random() * 400, Math.random() * -400],
              y: [Math.random() * 200, Math.random() * -200],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white">
        <div className="relative w-full max-w-5xl rounded-3xl bg-white/10 backdrop-blur-md p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-white/20">
          {/* Left Text & Form */}
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <h1 className="text-3xl font-semibold leading-snug">
              Having an <span className="text-amber-300">urgent problem</span> and can’t wait?
            </h1>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 p-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 p-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="flex-1 p-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #FBBF24" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-amber-300 text-[#0A3D62] font-semibold rounded-xl transition-all duration-300"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>

          {/* Animated Image (unchanged) */}
          <div className="relative flex justify-center items-center md:w-1/2">
            <motion.img
              src="callaction.png"
              alt="callaction"
              className="w-72 md:w-80 drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Soft Pulse Glow Behind Image */}
            <motion.div
              className="absolute w-72 h-72 bg-amber-300/40 rounded-full blur-[120px]"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CallToAction;
