import "./style.css"
import BannerImage from "../../assets/marvel.jpg"
function Banner(){
    return (
        <div className="banner h-80 mt-10">
        <img className="h-full w-full" src={BannerImage} alt="No-image"/>
        </div>
        );
}

export default Banner;