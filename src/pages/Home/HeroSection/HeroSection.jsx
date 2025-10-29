import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightToLine } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function HeroSection() {
  const content = [
    {
      category: "ROOF & SERVICE BENEFITS",
      title: "We Do Many Things For EveryThings",
      description:
        "Benefit from specialized roof coverage for common issues, along with 24/7 claims support and access to a trusted network of licensed professionals ready to assist.",
      image: "plumber1.png",
    },
    {
      category: "HEATING, COOLING & ELECTRICAL SYSTEMS",
      title: "We Do Many Things For EveryThings",
      description:
        "Ensure year-round comfort and safety with reliable coverage for your electrical systems. This includes protection for heating, air conditioning, and home electrical repairs.",
      image: "plumber2.png",
    },
    {
      category: "PLUMBING & WATERING SYSTEMS",
      title: "We Do Many Things For EveryThings",
      description:
        "Prevent costly plumbing repairs with comprehensive coverage for pipes, fixtures, and leaks, helping to safeguard your home from potential water damage.",
      image: "plumber3.png",
    },
  ];

  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  if (!api) return;

  const onSelect = () => setActiveIndex(api.selectedScrollSnap());
  api.on("select", onSelect);

  // --- Auto scroll every 2 seconds ---
  const interval = setInterval(() => {
    api.scrollNext(); // move to next slide
  }, 3000);

  return () => {
    api.off("select", onSelect);
    clearInterval(interval); // cleanup
  };
}, [api]);

  

  // --- Text animation variants ---
  const textContainer = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 1 } },
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="h-[80vh] bg-gray-100 flex flex-col items-center justify-center overflow-hidden">

      <div className="relative w-[85%]">
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {content.map((data, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="grid grid-cols-2 items-center gap-10 px-[50px]"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.4,
                    y: activeIndex === index ? 0 : 40,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* --- Text Section --- */}
                  <motion.div
                    variants={textContainer}
                    initial="hidden"
                    animate={activeIndex === index ? "visible" : "hidden"}
                    exit="exit"
                    className="flex flex-col gap-6"
                  >
                    <motion.p
                      variants={textItem}
                      className="text-lg font-semibold text-[#0A3D62] tracking-wide uppercase"
                    >
                      {data.category}
                    </motion.p>

                    <motion.h1
                      variants={textItem}
                      className="text-5xl font-bold text-gray-800 leading-tight"
                    >
                      {data.title}
                    </motion.h1>

                    <motion.p
                      variants={textItem}
                      className="text-md text-gray-600 leading-relaxed"
                    >
                      {data.description}
                    </motion.p>

                    <motion.div variants={textItem}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex justify-center items-center gap-2 px-3 py-3 border border-[#0A3D62] w-[180px] text-[#0A3D62] rounded-full transition-all duration-300 hover:bg-[#0A3D62] hover:text-white hover:shadow-md"
                      >
                        <span className="font-medium group-hover:text-white">
                          Our Services
                        </span>
                        <ArrowRightToLine
                          className="w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                          strokeWidth={1.5}
                        />
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* --- Image Section --- */}

                  <motion.div
                    className="relative flex justify-center items-center"
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : 100,
                      scale: activeIndex === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >

                    {/* Main Circle */}
                    <div className="w-[420px] h-[420px] rounded-full bg-[#0A3D62] z-10" />

                    <motion.img
                      src={data.image}
                      alt={data.title}
                      className="absolute object-contain w-[400px] z-20"
                      initial={{ opacity: 0, y: 80 }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 80,
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* --- Circle Indicators --- */}
        <div className="flex justify-center gap-3 mt-8 w-40">
          {content.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                backgroundColor:
                  activeIndex === index ? "#0A3D62" : "rgba(0,0,0,0)",
                scale: activeIndex === index ? 1.2 : 1,
              }}
              transition={{ duration: 1 }}
              className="h-3 w-3 rounded-full border border-[#0A3D62]"
            />
          ))}
        </div>
      </div>

            <motion.img
  src="tools.png"
  alt="tools"
  className="absolute bottom-0 right-0 w-[500px]" // adjust size as needed
  animate={{
    y: [0, -15, 0], // moves up and down
  }}
  transition={{
    duration: 3, // time for one full up-down cycle
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>




    </div>
  );
}

export default HeroSection;
