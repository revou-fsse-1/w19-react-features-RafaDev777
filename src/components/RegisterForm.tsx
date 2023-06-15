type RegisterFormProps = {
	setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = (props: RegisterFormProps) => {
	const showLoginForm = () => props.setShowLogin(true);
	return (
		<form className="flex-col items-center flex">
			<input
				id="email"
				className="p-[4px_10px] w-4/5 mt-10 border-b-[1px] border-white/80 bg-white/0 text-center focus:rounded-t-sm focus:bg-white/20 focus:outline-none focus:placeholder:text-white/0 placeholder:italic placeholder:text-sm placeholder:text-slate-600"
				placeholder="Please enter your email"
			></input>
			<input
				id="username"
				className="p-[4px_10px] w-4/5 mt-4 border-b-[1px] border-white/80 bg-white/0 text-center focus:rounded-t-sm focus:bg-white/20 focus:outline-none focus:placeholder:text-white/0 placeholder:italic placeholder:text-sm placeholder:text-slate-600"
				placeholder="Enter your username"
			></input>
			<input
				id="password"
				type="password"
				className="p-[4px_10px] w-4/5 mt-4 border-b-[1px] border-white/80 bg-white/0 text-center focus:rounded-t-sm focus:bg-white/20 focus:outline-none focus:placeholder:text-white/0 placeholder:italic placeholder:text-sm placeholder:text-slate-600"
				placeholder="Enter your password"
			></input>
			<button className="p-[0.25rem_2rem] mt-10 rounded-md bg-white/40 hover:bg-white/60">
				Register
			</button>
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
