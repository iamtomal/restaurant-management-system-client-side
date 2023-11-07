import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <p className=" font-concert text-center text-6xl text-orange-700">
        Contact
      </p>
      <div className="flex flex-col lg:flex-row md:flex-row-reverse justify-center md:gap-6 lg:gap-8 ">
        <div
          className="my-4"
          data-aos="flip-down"
        >
          <div className=" text-white p-8 bg-orange-950">
            <p className="text-3xl font-semibold text-center">
              Telephone & Email
            </p>
            <p className="text-lg mt-6">Telephone Number: +971 4 770 7943</p>

            <p className="text-lg">Mobile Number: +971 58 539 4689</p>

            <p className="text-lg">Email Address: management@restaurant.me</p>
          </div>
        </div>
        <div
          className="my-4"
          data-aos="flip-up"
        >
          <div className=" text-white p-8 bg-orange-800">
            <p className="text-3xl font-semibold text-center">Social Media</p>
            <p className="text-lg mt-6">
              Restaurant Management System Facebook
            </p>

            <p className="text-lg">Restaurant Management System Twitter</p>

            <p className="text-lg">Restaurant Management System Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
