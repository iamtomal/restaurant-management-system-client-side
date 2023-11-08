import { Link, useLoaderData } from "react-router-dom";
import About from "../../About/About";
import Contact from "../Contact/Contact";
import Marque from "../Marquee/Marquee";
import Banner from "./Banner/Banner";
import AllFoodCard from "../../Food/AllFoodItems/AllFoodCard";


const Home = () => {
    
    const foods = useLoaderData()

    return (
        <div>
            <Marque></Marque>
            <Banner></Banner>

            <div>
        <p className="text-4xl font-semibold text-center my-6 text-orange-700">Featured Foods</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-8 ">
            {
        foods.map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
    }
        </div>
        </div>

            <div className="flex justify-center mt-6">
            <Link to={'/allFood'}><button className="btn btn-primary bg-orange-700">See All Foods</button></Link>       
            </div>
            
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;