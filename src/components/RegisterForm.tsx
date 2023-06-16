type RegisterFormProps = {
	setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = (props: RegisterFormProps) => {
	const showLoginForm = () => props.setShowLogin(true);
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
				<a href="#" className="text-sky-600" onClick={showLoginForm}>
					Login
				</a>
			</p>
		</form>
	);
};
export default RegisterForm;
