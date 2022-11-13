import { Route, Routes } from "react-router-dom";
import Navbar from "./commonent/Navbar";
import AuthContextProvider from "./context/AuthContext.js";
import Home from "./pages/Home";
import Login from "../src/pages/Auth/Login.js";
import Signup from "../src/pages/Auth/Signup.js";
import Account from "../src/pages/Auth/Account.js";
import ProtectedRouts from "../src/commonent/ProtectedRouts.js";

function App() {
  return (
    <di>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRouts>
                <Account />
              </ProtectedRouts>
            }
          />
        </Routes>
      </AuthContextProvider>
    </di>
  );
}

export default App;
