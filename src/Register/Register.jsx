import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { updateProfile } from "firebase/auth";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
//   const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      swal("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal("Password should be at least one upper case.");
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      swal("Password should be at least one special character");
      return;
    }

    createUser(email, password, name, photo)
      .then((result) => {
        console.log(result.user);
        swal("Register Successful.");

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .than((result) => console.log(result))
          .catch((error) => console.error(error));
      })
      .catch();
  };
  return (
    <div>
      <div>
        <div className="hero my-4">
          <div className="hero-content flex-col">
            <div className="text-center my-2">
              <h1 className="text-5xl font-bold">Register Now!</h1>
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your photo url"
                    name="photo"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-orange-700 text-white text-lg">
                    REGISTER
                  </button>
                </div>
              </form>

              <p className="text-left text-sm font-semibold text-gray-400 ml-9 mb-4">
                Already have an account?<br></br> Please{" "}
                <Link to="/login" className="text-orange-700">
                  Login
                </Link>{" "}
                Now !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
