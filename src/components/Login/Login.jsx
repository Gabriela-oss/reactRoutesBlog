//Libs
import React from "react";
//Styles

const Login = () => {
  console.log('hola login')
  return(
    <div className="styles.login">
      <h1>Welcome back! Please Login</h1>
      <form className="styles.loginForm">
        <label htmlFor="email">
          <input type="email" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <input type="password" placeholder="Password" />
        </label>
      </form>
      <button className="styles.button">Enter</button>
    </div>
  )
}

export default Login;