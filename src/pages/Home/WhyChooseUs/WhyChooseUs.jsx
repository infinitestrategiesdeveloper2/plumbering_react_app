import React from 'react';
import { motion } from 'framer-motion';

function WhyChooseUs() {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-linear-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-4"
        >
          <p className="text-lg font-semibold text-[#0A3D62] tracking-widest uppercase">
            Why Choosing Our Services
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Welcome to Digital Sprints, Your Trusted Partner In Home Warranty Services
          </h1>

          <p className="text-md md:text-lg text-gray-600 leading-relaxed mt-4">
            We are dedicated to providing homeowners with reliable, affordable protection
            for their essential systems and appliances. With a focus on customer satisfaction
            and a commitment to excellence, we strive to deliver seamless solutions that keep your home running smoothly.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.img
            src="whychooseus.png"
            alt="whychooseus"
            className="rounded-3xl bg-gray-100 w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
