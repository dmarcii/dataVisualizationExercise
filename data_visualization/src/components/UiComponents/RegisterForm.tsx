function RegisterForm() {
  return (
    <div className="container">
      <div className="login-card">
        <div className="left">
          <div className="form">
            <h1>Register</h1>
            <div className="spacer-l"></div>
            <input className="input" type="text" placeholder="First Name" />
            <div className="spacer-m"></div>
            <input className="input" type="text" placeholder="Last Name" />
            <div className="spacer-m"></div>
            <input className="input" type="text" placeholder="Username" />
            <div className="spacer-m"></div>
            <select className="input" name="" id="">
              <option value="">--Select Gender--</option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
            <div className="spacer-m"></div>
            <label htmlFor="file-input" className="file-input-label">
              <p>Click to Upload Avatar</p>
              <input
                className="input"
                type="file"
                placeholder="Last Name"
                id="file-input"
              />
            </label>
            <div className="spacer-m"></div>
            <div className="checkbox-label">
              <input type="checkbox" name="" id="" />
              <p className="text">I accept the terms & conditions.</p>
            </div>
            <div className="spacer-l"></div>
            <button className="button form-button">Submit</button>
          </div>
        </div>
        <div className="right">
          <img className="login-img" src="art.jpeg" alt="login Img" />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
