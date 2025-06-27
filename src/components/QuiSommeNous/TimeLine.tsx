import { motion } from "framer-motion";
import timeLine from "../../images/timeLine.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%", transition: { duration: 1, ease: "easeOut" } }
};

const Timeline = () => {
  return (
    <div style={{
              background: "linear-gradient(180deg, #F7B399 2.94%, #91695A 106.44%)"
        }} 
    className="timeline h-250 w-full marg-t-70 relative overflow-hidden">
      <div className="centering">
        <motion.h1
          className="Title text-2xl md:text-4xl notreHistoire marg-b-30"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Notre Histoire
        </motion.h1>
        <motion.div
          className="grid grid-cols-[1fr_20px_1fr] justify-between marg-t-70 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Colonne gauche */}
          <div className="grid grid-rows-[170px_170px_170px_170px]">
            <motion.div className='marg-t-10 md:text-[23px] text-[#FFF] font-bold flex items-center justify-center h-full'
              variants={itemVariants}>1916</motion.div>
            <motion.div className='marg-t-10 text-[#89202D] font-bold flex items-center justify-center h-full'
              variants={itemVariants}>
              <p className="w-[98%] md:w-[60%] text-[14px] md:text-base md:text-[18px] text-center">
                Reconnue d’utilité publique par le Dahir du 8 Joumada 1371 (5 février).
              </p>
            </motion.div>
            <motion.div className='marg-t-10 text-[#FFF] font-bold flex items-center justify-center h-full md:text-[23px]'
              variants={itemVariants}>1958</motion.div>
            <motion.div className='marg-t-10 text-[#89202D] font-bold flex items-center justify-center h-full'
              variants={itemVariants}>
              <p className="w-[98%]  md:w-[60%] text-[14px] md:text-base text-center md:text-[18px]">
                L’UMPA continue son engagement en recueillant et soignant les animaux en détresse.
              </p>
            </motion.div>
          </div>
          {/* timeline verticale */}
          <div className="flex justify-center relative h-[680px]">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-4"
              style={{ overflow: "hidden" }}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={timeLine} alt="Timeline" className="w-4 h-[680px] object-cover" />
            </motion.div>
          </div>
          {/* Colonne droite */}
          <div className='grid grid-rows-[170px_170px_170px_170px]'>
            <motion.div className='marg-t-10 text-[#89202D] font-bold flex items-center justify-center h-full'
              variants={itemVariants}>
              <p className="w-[98%] md:text-[18px] md:w-[60%] text-[14px] md:text-base text-center">
                Création de l’Union Marocaine pour la Protection des Animaux (UMPA).
              </p>
            </motion.div>
            <motion.div className='marg-t-10 text-[#FFF] font-bold flex items-center justify-center h-full md:text-[23px]'
              variants={itemVariants}>1952</motion.div>
            <motion.div className='marg-t-10 text-[#89202D] font-bold flex items-center justify-center h-full'
              variants={itemVariants}>
              <p className="w-[98%] md:text-[18px] md:w-[60%] text-[14px] md:text-base text-center">
                Madame DUGENDRE Berthe, fondatrice du refuge animalier A Lissafa/Bouskoura.
              </p>
            </motion.div>
            <motion.div className='marg-t-10 text-[#FFF] font-bold flex items-center justify-center h-full'
              variants={itemVariants}>
              <p className="w-[98%] md:text-[19px] md:w-[60%] text-[14px] md:text-base text-center">
                Aujourd’hui
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Timeline;