import image1 from "../images/image 10.png"
import image2 from "../images/image 20.png"
import image3 from "../images/image 12.png"
import image4 from "../images/image 13.png"
import { motion } from "framer-motion"

const ObjectifsSection = () => {

    return (
        <>
            <div className="bg-[#F0AF95] h-auto">
                <h1 className="Title objectifTitle [text-shadow:2px_2px_5px_rgba(0,0,0,0.5)]">Nos Objectifs</h1>
                <div className="objectifsContainer">
                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="objectifItem">
                        <div>
                            <img src={image1} />
                        </div>
                        <div>
                            <h1>Refuge et soins </h1>
                            <p>Prise en charge des animaux blessés, malades ou en souffrance selon les moyens disponibles. </p>
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="objectifItem">
                        <div>
                            <img src={image2} />
                        </div>
                        <div>
                            <h1>Sensibilisation et éducation</h1>
                            <p>Informer et sensibiliser par la presse écrite, parlée et les événements publics ou privés.</p>
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="objectifItem">
                        <div>
                            <img src={image3} />
                        </div>
                        <div>
                            <h1>Défense des droits</h1>
                            <p>Signaler aux autorités et organismes compétents les actes de cruauté envers les animaux.</p>
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="objectifItem">
                        <div>
                            <img src={image4} />
                        </div>
                        <div>
                            <h1>Partenariats et engagements</h1>
                            <p>S'affilier et collaborer avec des associations de protection animale.</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default ObjectifsSection;