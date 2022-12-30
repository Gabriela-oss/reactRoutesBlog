//Libs
import React from "react";
//Styles
import styles from "./Register.module.css";

const Register = () => {
	
	return (
		<div className={styles.container}>
			<span className={styles.title}>
				<h1 className={styles.h1}>Welcome! Please Signup here 👇🏼</h1>
			</span>
			<div className={styles.form}>
				<form>
					<label htmlFor="name">
						<input
							className={styles.input}
							type="text"
							placeholder="enter your name"
						/>
					</label>
					<label htmlFor="email">
						<input
							className={styles.input}
							type="text"
							placeholder="enter your email address"
						/>
					</label>
					<label htmlFor="password">
						<input
							className={styles.input}
							type="password"
							placeholder="enter your password"
						/>
					</label>
				</form>
				<button className={styles.button}>Submit</button>
			</div>
		</div>
	);
};

export default Register;
