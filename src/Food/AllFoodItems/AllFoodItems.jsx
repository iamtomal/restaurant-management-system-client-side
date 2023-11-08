import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";



const AllFoodItems = () => {
    const foods = useLoaderData()
    return (
        <div>
        <p className="text-4xl font-semibold text-center my-6">Our All Foods</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-8 ">
            {
        foods.map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
    }
        </div>
        </div>
    );
};

export default AllFoodItems;