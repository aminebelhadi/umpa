import chat from "../images/image 15.png"
import dog from "../images/dog1 2.png"
import hmar from "../images/image 14.png"
import { motion } from "framer-motion"

const NosAnimauxSection = () => {

    return (
        <>
            <div>
                <h1 className="Title nosAnimauxTitle">Nos animaux</h1>
                <h3 className="mini-title nosAnimaux_miniTitle">Notre refuge accueille une grande diversité d’animaux, tous prêts à trouver une famille aimante .</h3>
                <div className="animauxContainer">

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="animalCardContainer">
                        <div className="animalCard_info flex justify-center align-middle">
                            <div>
                                <h1 className="">Nos chats</h1>
                                <p>Indépendants mais tendres, nos chats sont prêts à illuminer votre quotidien avec leurs câlins et leurs facéties.</p>
                                {/* <img src={arrow} /> */}
                            </div>
                        </div>
                        <div className="animalCard_image">
                            <img src={chat}  />
                        </div>
                    </motion.div>
                    {/*  */}
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="animalCardContainer">
                        <div className="animalCard_image">
                            <img src={dog} />
                        </div>
                        <div className="animalCard_info">
                            <div>
                                <h1 className="">Nos chiens</h1>
                                <p>Fidèles et affectueux, nos chiens attendent avec impatience un foyer chaleureux où ils pourront donner tout leur amour.</p>
                                {/* <img src={arrow} /> */}
                            </div>
                        </div>
                        
                    </motion.div>
                    {/*  */}
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="animalCardContainer">
                        <div className="animalCard_info">
                            <div>
                                <h1 className="">Nos Équidés</h1>
                                <p>Majestueux et doux, nos équidés méritent une seconde chance dans un environnement bienveillant et adapté.</p>
                                {/* <img src={arrow} /> */}
                            </div>
                        </div>
                        <div className="animalCard_image">
                            <img src={hmar} />
                        </div>
                    </motion.div>
                    {/*  */}
                </div>
            </div>
        </>
    )
}

export default NosAnimauxSection;