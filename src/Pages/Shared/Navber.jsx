// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  //   const {user, logOut} = useContext(AuthContext);

//   const handleSignOut = () => {
    //   logOut()
    //   .then()
    //   .catch()
//   };

  const navLink = (
    <>
      <div className="lg:flex gap-4 ">
        <div className="flex gap-2 md:gap-6 lg:gap-6 text-center ">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                  color: isActive ? "blue" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/allFood"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                  color: isActive ? "blue" : "",
                };
              }}
            >
              All Food Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addFood"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                  color: isActive ? "blue" : "",
                };
              }}
            >
              Add Food Items
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                  color: isActive ? "blue" : "",
                };
              }}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                  color: isActive ? "blue" : "",
                };
              }}
            >
              Blog
            </NavLink>
          </li>
        </div>
        <div>
          <Link to="/" className="flex justify-center gap-1">
            <img
              className="h-7 w-7"
              src="https://i.ibb.co/WvwQBxw/Good-food-logo-design-on-transparent-background-PNG.png"
              alt=""
            />
            <p className="font-concert font-bold text-xl text-yellow-500">
              <span className="text-yellow-600">R</span>estauant Management System
            </p>
          </Link>
        </div>
      </div>
    </>
  );
  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row md:justify-between lg:justify-between items-center">
      <div className="overflow-hidden">
        <ul className=" font-raleway p-2 font-bold rounded-md text-sm md:text-lg lg:text-lg">
          {navLink}
        </ul>
      </div>

      {/* <div className="flex justify-center gap-4 items-center">

  <ul className=" font-raleway p-2 font-bold rounded-md text-sm md:text-lg lg:text-lg">
  <li><NavLink to='/cart' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "blue" : "",
    };
  }}
>My Cart</NavLink></li>
      </ul>



{user ? 
<>
<div className="">
{
  user && user.photoURL? 
<img className="w-9 h-9 rounded-full border border-blue-700 p-0.5" src={user.photoURL} alt=""/>:
<img className="w-7 h-7" src="https://i.ibb.co/P5hTkcJ/1144811.png" alt=""/>
  }
</div>

<div className="font-raleway font-extrabold">
  <p>{user?.displayName}</p>
</div>

 <button onClick={handleSignOut} className=" bg-blue-600 text-white p-2 rounded-md font-concert px-4 "> logOut </button>
</>
 
 :

  <Link to='/login'>
<button className=" bg-blue-600 text-white p-2 rounded-md font-concert px-4 "> LogIn </button>
</Link>
}

</div> */}
    </div>
  );
};

export default Navbar;
