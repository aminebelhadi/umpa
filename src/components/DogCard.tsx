import dogImage from "../images/RandomDog.jpg"
import pawPrint from "../images/lll.png"
import gender from "../images/jjj.png"
import dateIcon from "../images/ddd.png"

const DogCard = () => {

    return (
        <div className="dogCard">
            <div className="imageContainer bg-black">
                <img  src={dogImage} />
                <div className="wave"></div>
            </div>
            
            <h2 className="dogName">Max</h2>
            
            <div className="dogInfo">
                <span>Caniche<img src={pawPrint} /></span>
                <span>Female<img src={gender} /></span>
                <span>2021<img src={dateIcon} /></span>
            </div>
        </div>
    )
}

export default DogCard;