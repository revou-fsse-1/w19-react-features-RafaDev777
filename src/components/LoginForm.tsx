const LoginForm = () => {
	return (
		<form className="flex-col items-center flex">
			<input
				id="email"
				className="p-[4px_10px] w-4/5 mt-10 border-b-2 border-white/80 bg-white/0 text-center focus:rounded-t-sm focus:bg-white/20 focus:outline-none placeholder:italic placeholder:text-md placeholder:text-stone-600"
				placeholder="Please enter your email"
			></input>
			<input
				id="password"
				className="p-[4px_10px] w-4/5 mt-4 border-b-2 border-white/80 bg-white/0 text-center focus:rounded-t-sm focus:bg-white/20 focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-stone-600"
				placeholder="Enter your password"
			></input>
			<p className="mt-2 text-sm italic">
				Don't have any account?{' '}
				<a href="#" className="text-sky-500">
					Register
				</a>
			</p>
			<button className="p-[0.25rem_2rem] mt-10 rounded-md bg-white/40 hover:bg-white/60">
				Login
			</button>
		</form>
	);
};
export default LoginForm;
