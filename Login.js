import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username) validationErrors.username = 'Username or Phone Number is required';
    if (!password) validationErrors.password = 'Password is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 2000)
      );

      if (response.success) {
        console.log('Login successful');
        // Redirect to dashboard or other page
      } else {
        setErrors({ general: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: 'An error occurred' });
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="logo-box">
            <img
              src="https://topdrive.com.ph/wp-content/uploads/2023/08/cropped-2023-TD-Logo-1.png"
              alt="Top Drive Driving School Logo"
              className="img-fluid logo-img"
            />
            <div className="logo-text-container">
              <p className="logo-text top">TOP</p>
              <p className="logo-text drive">DRIVE</p>
            </div>
            <div className="logo-text-container">
              <div className="logo-text driving underline-text">YOUR DRIVING</div>
              <div className="logo-text number underline-text">101</div>
              <div className="logo-text masters underline-text">MASTERS.</div>
            </div>
            <p className="logo-text TDDI">Top Drive Driving Institute</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="login-box">
            <h2 className="logo-text hello">Hello!</h2>
            <div className="logo-text credentials">Enter your credentials below.</div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Enter ID</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.username}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
  <input
    type={passwordVisible ? 'text' : 'password'}
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
  />
  <i
    className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'} eye-icon`}
    onClick={() => setPasswordVisible(!passwordVisible)}
  ></i>
</div>




                <div className="invalid-feedback">{errors.password}</div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>
              <button type="submit">Login</button>
              {errors.general && (
                <div className="alert alert-danger mt-3" role="alert">
                  {errors.general}
                </div>
              )}
            </form>
            <p className="text-center mt-3">
              <a href="/captcha">I'm not a robot</a>
            </p>
            <div className="footer-text">
        <p>By continuing, you agree to our</p>
        <p><a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
    </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
