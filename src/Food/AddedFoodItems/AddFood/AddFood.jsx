import Swal from 'sweetalert2'

const AddFood = () => {

    const handleAddFood = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const details = form.details.value;
        const rating = form.rating4.value;


        const newFood = {image, name, brandName, type, price, description, details, rating};

        fetch('http://localhost:5000/food',{
            method: 'POST',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
            if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Congratulation! Food added Successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }})
    }

  return (
    <div>
      <p className="text-4xl font-bold text-center mt-4">Add your food:</p>

      <form onSubmit={handleAddFood} className=" m-8">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Food Image URL"
            name="image"
            className="input input-bordered input-info w-full max-w-xs mt-2 "
          />
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Food Name"
            name="name"
            className="input input-bordered input-info w-full max-w-xs mt-2"
          />
        </div>


        
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Brand Name Ex. apple/samsung/nokia/sony/google/intel"
            name="brandName"
            className="input input-bordered input-info w-full max-w-xs mt-2"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Food Type"
            name="type"
            className="input input-bordered input-info w-full max-w-xs mt-2"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="number"
            placeholder="Food Price"
            name="price"
            className="input input-bordered input-info w-full max-w-xs mt-2"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Food Short Description"
            name="description"
            className="input input-bordered input-info w-full max-w-xs mt-2"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Food Details"
            name="details"
            className="input input-bordered input-info w-full max-w-xs mt-2"
          />
        </div>



        <div className="flex justify-center my-3">
          <div className="rating">
            <input
              type="radio"
              name="rating4"
              className="mask mask-star-2 bg-orange-800"
            />
            <input
              type="radio"
              name="rating4"
              className="mask mask-star-2 bg-orange-800"
              checked
            />
            <input
              type="radio"
              name="rating4"
              className="mask mask-star-2 bg-orange-800"
            />
            <input
              type="radio"
              name="rating4"
              className="mask mask-star-2 bg-orange-800"
            />
            <input
              type="radio"
              name="rating4"
              className="mask mask-star-2 bg-orange-800"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="input input-bordered input-info w-full max-w-xs mt-2 bg-orange-500 text-white font-semibold"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;