import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
  });
  const [image, setImage] = useState("");
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", credentials);
      navigate("/");
    } catch (err) {
      console.log("error");
    }
  };
  const handleImg=(e)=>{
    e.preventDefault();
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setImage(e.target.value);
  }
  return (
    <div className="container">
      <div className="xContainer">
      <div className="left">
            <img
              src={
                image
                  ? image
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="userImg"
            />
          </div>
        <div className="right">
            <div className="formInput">
              <label>Image</label>
              <input type="text" placeholder="enter https image" id="img" onChange={handleImg} />
            </div>
            <div className="formInput">
              <label>Username</label>
              <input type="text" placeholder="john_doe" id="username" onChange={handleChange} />
            </div>
            <div className="formInput">
              <label>Email</label>
              <input type="email" placeholder="john_doe@gmail.com" id="email" onChange={handleChange} />
            </div>
            <div className="formInput">
              <label>Phone</label>
              <input type="text" placeholder="+1 234 567 89" id="phone" onChange={handleChange} />
            </div>
            <div className="formInput">
              <label>Password</label>
              <input type="password" id="password" onChange={handleChange} />
            </div>
            <div className="formInput">
              <label>Country</label>
              <input type="text" placeholder="USA" id="country" onChange={handleChange} />
            </div>
            <div className="formInput">
              <label>City</label>
              <input type="text" placeholder="USA" id="city" onChange={handleChange} />
            </div>
              <button disabled={loading} onClick={handleClick} className="lButton">
                Register
              </button>       
        </div>
      </div>
    </div>
  );
};

export default Register;
