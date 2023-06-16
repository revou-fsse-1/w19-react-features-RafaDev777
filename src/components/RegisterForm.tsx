import { Link } from 'react-router-dom';

const RegisterForm = () => {
	return (
		<form className="flex-col items-center flex text-center">
			<input
				id="email"
				className="input-style mt-10"
				placeholder="Please enter your email"
			></input>
			<input
				id="username"
				className="input-style mt-4"
				placeholder="Enter your username"
			></input>
			<input
				id="password"
				type="password"
				className="input-style mt-4"
				placeholder="Enter your password"
			></input>
			<button className="primary-button mt-10">Register</button>
			<p className="mt-5 text-xs italic text-slate-500">
				Already have an account?{' '}
				<Link to="/login" className="text-sky-600">
					Login
				</Link>
			</p>
		</form>
	);
};
export default RegisterForm;
