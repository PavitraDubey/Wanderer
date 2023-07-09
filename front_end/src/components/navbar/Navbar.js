import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const { user,loading, error, dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT"});
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  const handleLogin=async(e)=>{
    e.preventDefault();
    navigate("/login")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Wanderer</span>
        </Link>
        {user ? (<>
          <div className="navItems">
            <div><button className="navButton" onClick={handleClick}>LogOut</button></div>
            <div><button className="navButton"> {user.username}</button></div>
            <img className="userimg" src={user.img}/>
          </div></>) : (
          <div className="navItems">
            <button className="navButton" onClick={()=>{navigate("/register")}}>Register</button>
            <button className="navButton" onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;