import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import instagramLogo from "../images/instagram.png"
import facebookLogo from "../images/facebook.png"
import whatsappLogo from "../images/whatsapp.png"

const Footer = () => {

    return (
        <>
            <div className="footerContainer relative bg-[#91695A]">

                <svg
                    className="absolute top-[-80px] left-0 w-full h-20"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    fill="#91695A"
                    fillOpacity={"1"}
                    d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,282.7C1120,288,1280,256,1440,240L1440,320L0,320Z"
                    />
                </svg>

                <div className="footer_leftSide">
                    <img src={logo} width={155}/>
                    <p className="paraghraphe text-white">Les animaux méritent respect et protection. Face aux abandons et maltraitances, nous nous engageons à leur offrir refuge, soins et dignité, pour un avenir plus humain à leurs côtés.</p>
                </div>
                <div className="footer_middleSide">
                    <h1 className="Title">Contact</h1>
                    <p>elise.beguin@orange.fr</p>
                    <p>umpaparrainages@live.fr</p>
                    <div className="socialMedia flex gap-6">
                        <Link to={""}><img src={instagramLogo} width={40} /></Link>
                        <Link to={""}><img src={facebookLogo} width={40} /></Link>
                        <Link to={""}><img src={whatsappLogo} width={40} /></Link>
                    </div>
                </div>
                <div className="footer_rightSide">
                    <h1 className="Title">Pages</h1>
                    <ul>
                        <li><Link to={""}>Accueil</Link></li>
                        <li><Link to={""}>Nos proteges</Link></li>
                        <li><Link to={""}>Adopter</Link></li>
                        <li><Link to={""}>Qui Sommes nous</Link></li>
                        <li><Link to={""}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;