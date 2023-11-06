import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-36">
            <img className="h-80 md:h-96" src="https://i.ibb.co/DLbZWcN/delivery-guy-taking-break-empty-state-illustration-editable-404-not-found-for-ux-ui-design-fast-food.jpg" alt="" />
        <Link to='/'><button className="btn bg-orange-600 text-white text-lg">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;