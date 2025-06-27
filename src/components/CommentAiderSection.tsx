import { Link } from "react-router-dom"
import dog from "../images/commentAiderDog.png"
import image1 from "../images/image 24.png"
import image2 from "../images/image_25-removebg-preview.png"
import image3 from "../images/image_26-removebg-preview.png"
import {motion} from "framer-motion"

const CommentAiderSection = () => {

    return (
        <>
            <div>
                <div className="commentAiderWave relative commentAiderContainer">
                    <div className="relative w-full">
                        <motion.img
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        src={dog}
                        className="absolute top-[-120px] left-1/4 transform -translate-x-1/2 w-[150px] z-10 rotate-[-3deg]"
                        />
                        <svg
                            className="absolute top-[-80px] left-0 w-full h-20 z-10"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#F7B399"
                                fillOpacity="0.3"
                                d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L0,320Z"
                            />

                            <path
                            fill="#F0AF95"
                            fillOpacity={"0.7"}
                            d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,282.7C1120,288,1280,256,1440,240L1440,320L0,320Z"
                            />
                        </svg>
                    </div>
                    <h1 className="Title commentAiderTitle">Comment Aider ?</h1>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="commentAider_cards">
                        <Link to={"/"} className="commentAider_card">
                            <h1>Faire un Don</h1>
                            <img src={image1} />
                        </Link>        
                        <Link to={"/"} className="commentAider_card">
                            <h1>Devenir bénévole</h1>
                            <img src={image2} />
                        </Link>        
                        <Link to={"/"} className="commentAider_card">
                            <h1>Parrainer un animal</h1>
                            <img src={image3} />
                        </Link>        
                    </motion.div>


                </div>
            </div>
        </>
    )
}

export default CommentAiderSection;