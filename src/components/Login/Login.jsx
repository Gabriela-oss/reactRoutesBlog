//Libs
import React from "react";
//Styles
import styles from "./Login.module.css";
const Login = () => {
	console.log("hola login");
	return (
		<div className={styles.login}>
			<h1>Welcome back! Please Login</h1>
			<form className={styles.loginForm}>
				<label htmlFor="email">
					<input className={styles.input} type="email" placeholder="Email" />
				</label>
				<label htmlFor="password">
					<input
						className={styles.input}
						type="password"
						placeholder="Password"
					/>
				</label>
				<button className={styles.button}>Enter</button>
			</form>
		</div>
	);
};

export default Login;
 