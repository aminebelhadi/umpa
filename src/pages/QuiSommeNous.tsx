import Footer from "../components/Footer";
import Header from "../components/Header";
import GeneralInfo from "../components/QuiSommeNous/GeneralInfo";
import HeroSection from "../components/QuiSommeNous/HeroSection";
import ImpactSection from "../components/QuiSommeNous/ImpactSection";
import Team from "../components/QuiSommeNous/Team";
import Timeline from "../components/QuiSommeNous/TimeLine";



const QuiSommeNous = () => {
    
    return (
        <div className="QuiSommeNous">
            <Header />
            <HeroSection />
            <GeneralInfo />
            <Timeline />
            {/* <NotreMission /> */}
            <Team />
            <ImpactSection />
            <Footer />
        </div>
    );
}

export default QuiSommeNous;