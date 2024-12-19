import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect} from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(()=>{
    console.log("useEffect called");
  },[]);



  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            </li>
          <li>
            <Link to="/cart">Cart</Link>
            </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName == "Login" ? 
              setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
