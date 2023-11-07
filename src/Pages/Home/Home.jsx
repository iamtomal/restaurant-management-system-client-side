import About from "../../About/About";
import Contact from "../Contact/Contact";
import Marque from "../Marquee/Marquee";
import Banner from "./Banner/Banner";


const Home = () => {
    
    return (
        <div>
            <Marque></Marque>
            <Banner></Banner>
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;