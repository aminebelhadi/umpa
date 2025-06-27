import { motion } from "framer-motion";
import '../../miniFramework.css'
import image from "../../images/generalinfoImage.png"

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

const GeneralInfo = () => {
    return(
        <div id="GeneralInfo" className="w-full marg-t-150">
            <motion.div
                className="centering flex flex-col md:flex-row justify-between items-center md:items-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="w-full md:w-1/2" variants={itemVariants}>
                    <motion.h1 className="Title text-2xl md:text-4xl" variants={itemVariants}>
                        UMPA
                    </motion.h1>
                    <motion.p
                        className="paragr-font primary-color marg-t-30 leading-8 text-base md:text-lg lg:text-xl w-full md:w-[90%]"
                        variants={itemVariants}
                    >
                        l’Union Marocaine pour la Protection des Animaux (UMPA) est une association engagée dans la défense et le bien-être des animaux au Maroc. Reconnue d’utilité publique en 1952, elle œuvre sans relâche pour secourir, protéger et offrir un refuge aux animaux en détresse.
                        Guidée par sa devise : « <b className='paragr-font'> Les aimer pour les comprendre, les comprendre pour les défendre </b>», l’UMPA s’investit dans la prise en charge des animaux abandonnés, maltraités ou errants, en leur assurant des soins et un cadre de vie sécurisé.
                    </motion.p>
                </motion.div>
                <motion.div className="marg-t-30 mt-8 md:mt-0 md:ml-8 w-full md:w-auto flex justify-center md:block" variants={itemVariants}>
                    <img className="w-80 md:w-110" src={image} alt="UMPA" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default GeneralInfo;