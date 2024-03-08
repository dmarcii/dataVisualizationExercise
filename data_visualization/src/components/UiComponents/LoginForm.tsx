import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../state/api/userSlice";
import { Link } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }: any) => {
    setUserInput(target.value);
  };

  const loginAction = async () => {
    await dispatch(login(userInput));
    navigate(`/dashboard/${userInput}`);
  };

  return (
    <div className="container">
      <div className="login-card">
        <div className="left">
          <div className="form">
            <h1>Login</h1>
            <div className="spacer-l"></div>
            <input
              className="input"
              type="text"
              placeholder="UserName"
              name="userInput"
              onChange={handleChange}
            />
            <div className="spacer-m"></div>
            <div className="checkbox-label">
              <input type="checkbox" name="" id="" />
              <p className="text">Remember me</p>
            </div>
            <div className="spacer-l"></div>
            <button className="button form-button" onClick={loginAction}>
              Submit
            </button>
            <div className="spacer-l"></div>
            <Link to="/register" className="text">
              Don't have an account?
            </Link>
          </div>
        </div>
        <div className="right">
          <img className="login-img" src="lights.jpeg" alt="login Img" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
