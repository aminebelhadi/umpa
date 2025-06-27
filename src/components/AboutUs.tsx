import image from "../images/aboutUsImage.png"
import VoirPlusLink from "./VoirPlusLink";
import arrowToRight from '../images/fleche-pointant-vers-la-droite (1).png'
import React from "react";
import data from "../data.json"
import { motion } from "framer-motion";

const AboutUs = () => {

    const [showLinkOnBottom, setShowLinkOnBottom] = React.useState(true)

    

    React.useEffect(() => {
        const handleShowLink = () => {
            window.innerWidth < 1010 ? setShowLinkOnBottom(false) : setShowLinkOnBottom(true);
        }
        handleShowLink()
        window.addEventListener("resize", handleShowLink)
        return () => window.removeEventListener("resize", handleShowLink)
    }, [])

    return (
        <>
            <div className="aboutUsContainer">
                <div className="info">
                    <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="Title">Qui sommes-nous ?</motion.h1>
                    <motion.h4
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mini-title">Notre mission & nos valeurs</motion.h4>
                    <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                        className="paraghraphe"
                        dangerouslySetInnerHTML={{ __html: data.umpaDescription }}
                    />

                    {showLinkOnBottom &&
                        <VoirPlusLink
                        to="/TODO"
                        text="Savoir plus"
                        icon={arrowToRight}
                        className="aboutUsLink"
                    />}
                </div>
                <div className="imageContainer">
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1,}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    src={image} />
                </div>
            </div>
            {!showLinkOnBottom &&
                <VoirPlusLink
                        to="/TODO"
                        text="Savoir plus"
                        icon={arrowToRight}
                        className="aboutUsLink"
            />}
        </>
    )
}

export default AboutUs;