import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import footPrint from "../images/image 67@2x.png";
import dog from '../images/heroSectionDog.png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HeroSection = () => {
  const [showRightPart, setShowRightPart] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setShowRightPart(false) : setShowRightPart(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='heroSection w-full relative overflow-hidden'>
      <div className='heroSectionContent flex justify-between'>
        <motion.div
          className='leftPart flex flex-col gap-2'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>Aimer</motion.h2>
          <motion.h2 variants={itemVariants}>Comprendre</motion.h2>
          <motion.h2 variants={itemVariants}>Protéger</motion.h2>
          <motion.h5 variants={itemVariants} className='parag text-white'>
            Donner leur une seconde chance
          </motion.h5>
          <motion.div variants={itemVariants}>
            <Link to="/Donation" className='donateBtn'>Donate</Link>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {showRightPart && (
            <motion.div
              className='rightPart relative flex flex-col items-end gap-4 p-4'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src={footPrint}
                width={84}
                alt="footprint"
                className='footPrintT absolute bottom-8 left-[-3rem]'
                initial={{ rotate: -20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.img
                src={dog}
                width={310}
                alt="dog"
                className='heroSectionDog'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.img
                src={footPrint}
                width={90}
                alt="footprint"
                className='footPrint absolute top-0 right-[-2rem]'
                initial={{ rotate: 20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-35"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FDD9CC"
          d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L0,320Z"
        />
        <path
          fill="#FFECE5"
          d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,282.7C1120,288,1280,256,1440,240L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default HeroSection;
