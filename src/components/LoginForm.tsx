import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
	// # Validation Function --------------------------
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const loginOpt = {
		username: { required: 'Please fill in your username' },
		passsword: { required: 'Please fill input your password' },
	};

	// # Form Business Function -----------------------

	// # Test Purpose Function------------------------
	const navigate = useNavigate();
	const routeChange = () => {
		const path = '/dashboard/1';
		navigate(path);
	};

	return (
		<>
			<form className="flex-col items-center flex opacity-100 transition-opacity ease-in text-center">
				<input
					id="username"
					className="input-style mt-5"
					placeholder="Please enter your username"
				></input>
				<input
					id="password"
					type="password"
					className="input-style mt-4"
					placeholder="Enter your password"
				></input>
				<button className="primary-button mt-10" onClick={routeChange}>
					Login
				</button>
				<p className="mt-2 text-sm italic text-slate-500 transition ease-in-out duration-300">
					Don't have any account?{' '}
					<Link to="/register" className="text-sky-600">
						Register
					</Link>
				</p>
			</form>
		</>
	);
};
export default LoginForm;
