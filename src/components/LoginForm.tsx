import React from 'react';
import { useForm } from 'react-hook-form';

type LoginProps = {
	setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
	showLogin: boolean;
};

const LoginForm = (props: LoginProps) => {
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
	const hideLoginForm = () => props.setShowLogin(false);

	return (
		<form className="flex-col items-center flex opacity-100 transition-opacity ease-in text-center">
			<input
				id="username"
				className="input-style mt-10"
				placeholder="Please enter your username"
			></input>
			<input
				id="password"
				type="password"
				className="input-style mt-4"
				placeholder="Enter your password"
			></input>
			<button className="p-[0.25rem_2rem] mt-10 rounded-md bg-white/40 transition ease-in-out hover:bg-white/70">
				Login
			</button>
			<p className="mt-2 text-sm italic text-slate-500 transition ease-in-out duration-300">
				Don't have any account?{' '}
				<a href="#" className="text-sky-600" onClick={hideLoginForm}>
					Register
				</a>
			</p>
		</form>
	);
};
export default LoginForm;
