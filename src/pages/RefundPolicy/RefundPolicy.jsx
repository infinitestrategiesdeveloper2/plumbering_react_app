import React from "react";
import { motion } from "framer-motion";

function RefundPolicy() {
  const sections = [
    {
      title: "1. Service Satisfaction Guarantee",
      content: "If you are not satisfied with the quality of our service, please contact us within 7 days of service completion. We will assess the situation and work with you to find a resolution, which may include: correcting the issue at no additional charge, partial refund based on the nature of the issue, or full refund in rare cases where service was not performed as agreed.",
    },
    {
      title: "2. Non-Refundable Charges",
      content: "Please note that the following items are non-refundable: diagnostic or service call fees once a technician has been dispatched, parts or materials that have already been installed, and work that has been approved and completed to agreed specifications.",
    },
    {
      title: "3. Cancellations and Rescheduling",
      content: "Appointments canceled at least 24 hours in advance will receive a full refund of any pre-paid amounts. Same-day cancellations may be subject to a cancellation fee to cover scheduling and administrative costs.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#0A3D62] to-[#05233A] text-white py-24 px-6 md:px-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Refund Policy
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-gray-200 text-md md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Digital Sprints, customer satisfaction is our top priority. Please review our refund policy below.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-16 flex flex-col gap-12">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A3D62] mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-md md:text-lg">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RefundPolicy;
