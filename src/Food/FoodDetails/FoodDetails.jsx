import { Link,  useLoaderData,  useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const FoodDetails = () => {
    const foods = useLoaderData();
    const {id} = useParams()
    const food = foods.find(food => food._id == id)




    const handleCart = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Congratulation! Food Order Successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          })

    };
    
    

  return (
    <div className="flex justify-center">
                <div>
      <p className="text-4xl font-semibold text-center my-2">Food Details</p>

      <div>
        <div className="card w-96 glass bg-orange-100 my-4">
          <figure>
            <img className="h-48 w-full" src={food.image} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-raleway font-bold">{food.name}</h2>
            <p>Brand: {food.brandName}</p>
            <p>Food Type: {food.type}</p>
            <p>Description: {food.description}</p>
            <p>Food Details: {food.details}</p>

            <p className="font-semibold">Price: {food.price} Tk.</p>

            <div className="flex justify-center my-3">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-800"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-800"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-800"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-800"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-orange-800"
                />
              </div>
            </div>

            <div className="card-actions justify-end">
            <Link onClick={handleCart} className="text-center w-full bg-orange-500 py-2 rounded-md font-semibold text-white font-raleway">Order Food</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FoodDetails;