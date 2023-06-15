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
	console.log(props.showLogin, '2');
	return (
		<form
			className={`flex-col items-center flex opacity-100 transition-opacity ease-in ${
				props.showLogin ? 'opacity-100' : '' // this kept here for review
			}`}
		>
			<input
				id="username"
				className="p-[4px_10px] w-4/5 mt-10 border-b-[1px] border-white/80 bg-white/0 text-center focus:rounded-t-sm focus:bg-white/20 focus:outline-none focus:placeholder:text-white/0 placeholder:italic placeholder:text-sm placeholder:text-slate-600"
				placeholder="Please enter your username"
			></input>
			<input
				id="password"
				type="password"
				className="p-[4px_10px] w-4/5 mt-4 border-b-[1px] border-white/80 bg-white/0 text-center focus:rounded-t-sm focus:bg-white/20 focus:outline-none focus:placeholder:text-white/0 placeholder:italic placeholder:text-sm placeholder:text-slate-600"
				placeholder="Enter your password"
			></input>
			<button className="p-[0.25rem_2rem] mt-10 rounded-md bg-white/40 hover:bg-white/70">
				Login
			</button>
			<p className="mt-2 text-sm italic text-slate-500">
				Don't have any account?{' '}
				<a href="#" className="text-sky-600" onClick={hideLoginForm}>
					Register
				</a>
			</p>
		</form>
	);
};
export default LoginForm;
