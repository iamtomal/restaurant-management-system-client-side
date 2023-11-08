import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

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
                  color: isActive ? "red" : "",
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
                  color: isActive ? "red" : "",
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
                  color: isActive ? "red" : "",
                };
              }}
            >
              Add Food Items
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Sponsor"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                  color: isActive ? "red" : "",
                };
              }}
            >
              Sponsor
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                  color: isActive ? "red" : "",
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
              className="h-7 w-7 border-2 border-red-500 rounded-full"
              src="https://i.ibb.co/WvwQBxw/Good-food-logo-design-on-transparent-background-PNG.png"
              alt=""
            />
            <p className="font-concert font-bold text-xl text-orange-500">
              <span className="text-orange-600">R</span>estauant Management
              System
            </p>
          </Link>
        </div>
      </div>
    </>
  );
  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row md:justify-between lg:justify-between items-center bg-orange-200 shadow-lg shadow-orange-300">
      <div className="overflow-hidden">
        <ul className=" font-raleway p-2 font-bold rounded-md text-sm md:text-lg lg:text-lg">
          {navLink}
        </ul>
      </div>

      <div className="flex justify-center gap-4 items-center">
        {user ? (
          <>
            <div className="">
              {user && user.photoURL ? (
                <><div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className=" m-1"><img
                  className="w-9 h-9 rounded-full border border-orange-700 p-0.5"
                  src={user.photoURL}
                  alt="" /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <Link to={'/addedFoodItems'}><li><a>My added food items</a></li></Link>
                      <Link to={'/addFood'}><li><a>Add a food item</a></li></Link>
                      <Link to={'/orderedFood'}><li><a>My ordered food item</a></li></Link>
                      
                    </ul>
                  </div></>


              ) : (
                <img
                  className="w-7 h-7"
                  src="https://i.ibb.co/P5hTkcJ/1144811.png"
                  alt=""
                />
              )}
            </div>

            <div className="font-raleway font-extrabold">
              <p>{user?.displayName}</p>
            </div>

            <button
              onClick={handleSignOut}
              className=" bg-orange-600 text-white p-2 rounded-md font-concert px-4 "
            >
              {" "}
              logOut{" "}
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className=" bg-orange-600 text-white p-2 rounded-md font-concert px-4 ">
              {" "}
              LogIn{" "}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
