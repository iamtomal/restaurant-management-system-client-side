import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const AllFoodCard = ({ food }) => {

    const handleOrder=() =>{
        Swal.fire({
            title: 'Success!',
            text: 'Congratulation! Food Order Successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
    }

  const { _id, image, name, brandName, type, price } = food;
  return (
    <div>
      <div>
        <div>
          <div className="card w-96 glass bg-orange-100 mt-4">
            <figure>
              <img className="" src={image} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-raleway font-bold">{name}</h2>
              <p>Brand: {brandName}</p>
              <p>Food Type: {type}</p>
              <p className="font-semibold">Price: {price} Tk.</p>

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
                <Link
                  to={`/foodDetails/${_id}`}
                  className="text-center w-full bg-orange-500 py-2 rounded-md font-semibold text-white font-raleway"
                >
                  Food Details
                </Link>
                <Link onClick={handleOrder}
                  className="text-center w-full bg-orange-700 py-2 rounded-md font-semibold text-white font-raleway"
                >
                  Order Food
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoodCard;