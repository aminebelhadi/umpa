import { motion } from "framer-motion";
import "../../miniFramework.css"
import image from "../../images/notreMissionImage.png"
import image2 from "../../images/notreMissionImage2.png"

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

const NotreMission = () => {
    return (
        <div className="marg-t-120 relative z-10">
            <div className="centering-notreMission">
                <motion.h1 className="t" variants={itemVariants} initial="hidden" animate="visible">Notre Mission</motion.h1>
                <motion.p className="mini-title" variants={itemVariants} initial="hidden" animate="visible">Protéger, Secourir et Sensibiliser</motion.p>
                <motion.div
                  className="flex flex-col md:flex-row items-center md:items-start gap-0"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  
                >
                    <motion.div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-7 marg-t-70" variants={itemVariants}>
                        <p className="text-xl font-bold mb-6 text-[#c36c41]">Recueillir et Protéger les Animaux Abandonnés</p>
                        <motion.div className="benefit-item mb-4" variants={itemVariants}>
                            <p className="text-center">Un abri sécurisé au sein de notre refuge de Bouskoura.</p>
                        </motion.div>
                        <motion.div className="benefit-item mb-4" variants={itemVariants}>
                            <p className="text-center">Une alimentation adaptée et des soins vétérinaires réguliers.</p>
                        </motion.div>
                        <motion.div className="benefit-item" variants={itemVariants}>
                            <p className="text-center">Une chance d’être adoptés par des familles bienveillantes.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="marg-t-70 w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0" variants={itemVariants}>
                        <img src={image} alt="Notre Mission" className="w-full md:w-96 rounded-lg shadow" />
                    </motion.div>
                </motion.div>
                
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-between w-full md:items-start gap-0 mt-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-7 marg-t-70" variants={itemVariants}>
                        <p className="text-xl font-bold mb-6 text-[#c36c41]">Soigner et Réhabiliter les Animaux en Détresse</p>
                        <motion.div className="benefit-item mb-4" variants={itemVariants}>
                            <p className="text-center">Des soins vétérinaires complets</p>
                        </motion.div>
                        <motion.div className="benefit-item mb-4" variants={itemVariants}>
                            <p className="text-center">Un suivi comportemental pour les aider à retrouver confiance en l’humain</p>
                        </motion.div>
                        <motion.div className="benefit-item" variants={itemVariants}>
                            <p className="text-center">Un espace sécurisé pour leur permettre de se rétablir et de vivre en paix.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="marg-t-70  w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0" variants={itemVariants}>
                        <img src={image2} alt="Notre Mission" className="w-full  md:w-96 rounded-lg shadow" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default NotreMission;