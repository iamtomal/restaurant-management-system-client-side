import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero px-8 py-6 bg-orange-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://www.codesgesture.com/assets/images/best-yummy-restaurant-software-company-in-gorakhpur.gif" className="md:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Restaurant Management System!</h1>
      <p className="text-justify text-gray-500 font-semibold pr-8 py-6"> A restaurant management system (RMS) is a software application that helps you automate and streamline all aspects of your restaurant business, from inventory management to scheduling to customer service. A good RMS can save you time, money, and headaches, and help you improve your bottom line.</p>
      <Link to={'/login'}><button className="btn btn-primary bg-orange-700">Login For Order Food</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;