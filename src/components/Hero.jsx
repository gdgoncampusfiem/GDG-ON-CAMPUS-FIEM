import React from "react";
// import {assets} from "../assets/assets";
import heropic from "../assets/heropic.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#ffffff] via-[#ffeeee] to-[#ffffff]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* left-content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-rd">GOOGLE</span>{" "}
            <span className="text-bl">DEVELOPER</span>
            <span className="text-gr"> GROUP</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter text-yl">
            FIEM
          </h2>
          <p className="text-lg text-black mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero
            necessitatibus reprehenderit officiis alias temporibus totam tenetur
            qui sequi sunt in cum ipsum nam cupiditate aliquid harum, numquam
            modi beatae.
          </p>

          
        </div>
        {/* right-content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative md:w-80 md:h-80">
            <div>
              <img
                

                className="relative rounded-xl md:w-80 md:h-80 object-cover z-10 animate-float"
                src={heropic}
                alt="heropic"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
