"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Slide = {
  src: string;
  caption?: string;
};

type Props = {
  slides: Slide[];
  intervalMs?: number;
};

export default function ShowcaseSlider({ slides, intervalMs = 3000 }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const count = slides.length;

  useEffect(() => {
    start();
    return stop;
  }, [index, count, intervalMs]);

  const start = (): void => {
    stop();
    timer.current = setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
  };

  const stop = (): void => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  const goto = (i: number): void => {
    const newIndex = i % count;
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  // Type-safe variants
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
      x: direction > 0 ? 50 : -50,
      filter: "blur(1px)",
    }),
    center: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Premium easing curve
        opacity: { duration: 0.8 },
        scale: { duration: 1.0, delay: 0.1 },
        filter: { duration: 0.7, delay: 0.2 },
        x: { duration: 0.9 },
        rotateY: { duration: 1.0 },
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 1.05,
      rotateY: direction > 0 ? -15 : 15,
      x: direction > 0 ? -50 : 50,
      filter: "blur(1px)",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Sleek exit curve
      },
    }),
  };

  const dotVariants: Variants = {
    inactive: {
      scale: 1,
      opacity: 0.5,
      y: 0,
      backgroundColor: "#ffffff",
    },
    active: {
      scale: 1.3,
      opacity: 1,
      y: -3,
      backgroundColor: "#ffffff",
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
        mass: 0.8,
      },
    },
    hover: {
      scale: 1.15,
      y: -1,
      backgroundColor: "#ffffff",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const dotsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3,
      },
    },
  };

  const dotItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0, 
      y: 15 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 600,
        damping: 25,
        mass: 0.6,
      },
    },
  };

  const captionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: { 
      opacity: 0, 
      x: 30, 
      y: -10,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const backgroundGlowVariants: Variants = {
    animate: {
      opacity: [0, 0.3, 0],
      scale: [1, 1.02, 1],
      transition: {
        duration: intervalMs / 1000,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  if (count === 0) return null;

  return (
    <motion.section
      className="w-full md:py-3 "
      onMouseEnter={stop}
      onMouseLeave={start}
      aria-roledescription="carousel"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Desktop container */}
      <div className="relative mx-auto aspect-[21/9] w-full max-w-full overflow-hidden hidden md:block">
        {/* Premium background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-red-500/8 to-orange-600/12 rounded-sm"
          variants={backgroundGlowVariants}
          animate="animate"
        />
        
        {/* Slides with enhanced AnimatePresence */}
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.015,
                  transition: { 
                    duration: 0.4, 
                    ease: [0.22, 1, 0.36, 1] 
                  },
                }}
                className="h-full w-full"
              >
                <Image
                  src={slides[index].src}
                  alt={slides[index].caption ?? `Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              {/* Enhanced caption animation */}
              <AnimatePresence>
                {slides[index].caption && (
                  <motion.div
                    className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-5 py-3 rounded-xl text-white shadow-2xl border border-white/10"
                    variants={captionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.p
                      className="text-sm font-medium tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        delay: 0.8, 
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {slides[index].caption}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile container */}
      <div className="relative w-full h-[489px] overflow-hidden md:hidden block">
        {/* Premium background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-red-500/8 to-orange-600/12 rounded-sm"
          variants={backgroundGlowVariants}
          animate="animate"
        />
        
        {/* Slides with enhanced AnimatePresence */}
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`mobile-${index}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.015,
                  transition: { 
                    duration: 0.4, 
                    ease: [0.22, 1, 0.36, 1] 
                  },
                }}
                className="h-full w-full"
              >
                <Image
                  src={slides[index].src}
                  alt={slides[index].caption ?? `Slide ${index + 1}`}
                  width={375}
                  height={489}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>

              {/* Download Button - Mobile Only */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8, 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.button
                  className="bg-black/80 backdrop-blur-md text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide shadow-2xl border border-white/10"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  Download
                </motion.button>
              </motion.div>

              {/* Enhanced caption animation */}
              {/* <AnimatePresence>
                {slides[index].caption && (
                  <motion.div
                    className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-5 py-3 rounded-xl text-white shadow-2xl border border-white/10"
                    variants={captionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.p
                      className="text-sm font-medium tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        delay: 0.8, 
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {slides[index].caption}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence> */}
              
              {/* Enhanced caption animation */}
              {/* <AnimatePresence>
                {slides[index].caption && (
                  <motion.div
                    className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-5 py-3 rounded-xl text-white shadow-2xl border border-white/10"
                    variants={captionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.p
                      className="text-sm font-medium tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        delay: 0.8, 
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      {slides[index].caption}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Premium animated dots */}
      <motion.div
        className="mx-auto md:mt-6 mt-4 flex w-full max-w-[1200px] items-center justify-center gap-4 pb-4"
        variants={dotsContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <motion.button
              key={i}
              onClick={() => goto(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative p-2"
              variants={dotItemVariants}
              // whileTap={{ 
              //   scale: 0.85,
              //   transition: { duration: 0.1 }
              // }}
            >
              <motion.span
                className="block md:h-2.5 md:w-2.5 w-1.5 h-1.5 rounded-full shadow-lg"
                variants={dotVariants}
                animate={active ? "active" : "inactive"}
                whileHover={!active ? "hover" : undefined}
              />
              
              {/* Enhanced ripple effect */}
              {/* <AnimatePresence>
                {active && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/20 border border-white/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 2.5, 0.8], 
                      opacity: [0, 0.4, 0] 
                    }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                  />
                )}
              </AnimatePresence> */}
            </motion.button>
          );
        })}
      </motion.div>
    </motion.section>
  );
}