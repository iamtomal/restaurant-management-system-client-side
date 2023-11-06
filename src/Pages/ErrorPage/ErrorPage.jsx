import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-36">
            <p className="text-5xl font-concert font-extrabold my-4">404 not Found !</p>
        <Link to='/'><button className="btn bg-orange-600 text-white text-lg">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;