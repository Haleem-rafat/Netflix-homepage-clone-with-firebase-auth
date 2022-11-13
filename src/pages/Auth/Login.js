import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEamail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  };
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/cd34bd7b-7d7b-4a4a-be21-761144ea144d/EG-en-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-full "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-md">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {err ? <p className="p-4 bg-red-400 my-2">{err}</p> : null}
              <form onSubmit={handelSubmit} className="flex flex-col">
                <input
                  onChange={(e) => setEamail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between text-sm text-gray-600 ">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <div>
                  <p className="py-8 ">
                    <span className="text-sm text-gray-600 py-4">
                      New to Netflix?
                    </span>
                    <Link to="/signup">Sign In</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
