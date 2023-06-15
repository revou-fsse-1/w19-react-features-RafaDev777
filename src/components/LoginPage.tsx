const LoginPage = () => {
	return (
		<>
			<div className=" flex flex-col justify-center items-center w-screen min-h-screen">
				<div className="backdrop-blur-md rounded-xl p-24 bg-slate-200/60 max-w-2xl flex flex-col shadow-xl">
					<img className="avatar" />
					<h1 className="font-bold text-4xl text-center">
						Welcome To The Summit
					</h1>
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
							<a href="google.com" className="text-sky-500">
								Register
							</a>
						</p>
						<button className="p-[0.25rem_2rem] mt-10 rounded-md bg-white/40 hover:bg-white/60">
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
