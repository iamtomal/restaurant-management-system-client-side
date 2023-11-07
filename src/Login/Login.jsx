import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .than((result) => {
        swal("Login Successfully.");
      })
      .catch();
  };



  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        swal("Login Successfully.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        swal("Password or email address not match.");
      });
  };

  return (
    <div>
      <div className="hero my-4">
        <div className="hero-content flex-col">
          <div className="text-center my-2">
            <p className="text-5xl font-bold">Login now!</p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn bg-blue-600 text-white text-lg">
                  LOGIN
                </button>
              </div>
            </form>
            <p className="text-left text-sm font-semibold text-gray-400 ml-9 mb-4">
              Do not have any account?<br></br> Please{" "}
              <Link to="/register" className="text-blue-600">
                REGISTER
              </Link>{" "}
              Now ! <br></br>{" "}
              <span className="text-lg font-bold text-black">or</span>
              <br></br>Log in with{" "}
              <button onClick={handleGoogleSignIn} className="text-blue-600">
                GOOGLE
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
