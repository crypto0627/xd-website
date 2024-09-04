import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Logo() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <div className="container px-4 md:px-6" ref={ref}>
      <motion.div
        className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <motion.div
          className="flex flex-col justify-center space-y-8 lg:space-y-10"
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
          }}
        >
          <div className="space-y-4 lg:space-y-6">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
              }}
            >
              <Image
                src="/XueDAO_logo.webp"
                alt="xuedao logo"
                className="mx-auto pt-4"
                width={600}
                height={300}
                priority
              />
            </motion.h1>
            <motion.p
              className="text-center text-3xl max-w-[700px] mx-auto text-gray-500 dark:text-gray-400"
              variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
              }}
            >
              Show the world that <br /> Taiwanese Students <br /> can{" "}
              <span className="font-bold text-black">BUIDL</span>
            </motion.p>
          </div>
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
            }}
          >
            <Link href="https://t.me/+0Rvawr400uNhNTY1" target="_blank">
              <Button className="inline-flex h-14 sm:h-16 w-64 sm:w-72 lg:w-80 items-center justify-center border-4 rounded-full hover:shadow-lg hover:bg-gray-100 bg-white px-8 text-lg sm:text-xl font-bold text-black focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Join NOW
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lg:flex items-center justify-center"
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
          }}
        >
          <Image
            src="/puzzle.webp"
            width={1000}
            height={800}
            alt="puzzle"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Logo;
