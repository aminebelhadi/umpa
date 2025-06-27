import dog1 from "../images/galerieDog1.png"
import dog2 from "../images/galerieDog2.png"
import dog3 from "../images/galerieDog3.png"
import dog4 from "../images/galerieDog4.png"
import dog5 from "../images/galerieDog5.png"
import dog6 from "../images/galerieDog6.png"
import {motion} from "framer-motion"

const Galerie = () => {

    return (

        <>
            <div className="galerieContainer">
                <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="Title">Galerie</motion.h1>
                <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mini-title galerie_miniTitle">En images ceux qui attendent amour et protection dans notre refuge.</motion.h3>
                <div className="galerie_images grid grid-cols-2 gap-4 p-4">
                    <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    src={dog5} className="w-full h-auto object-cover rounded-lg" />
                    <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    src={dog2} className="w-full h-auto object-cover rounded-lg" />
                    <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    src={dog3} className="col-span-1 w-full h-auto object-cover rounded-lg" />
                    <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    src={dog4} className="w-full h-auto object-cover rounded-lg" />
                    <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    src={dog1} className="w-full h-auto object-cover rounded-lg" />
                    <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    src={dog6} className="col-span-1 w-full h-auto object-cover rounded-lg" />
                </div>
                
            </div>
        </>
    )
}

export default Galerie;