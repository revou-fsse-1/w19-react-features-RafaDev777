import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginPage = () => {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<>
			<div className=" flex flex-col justify-center items-center w-screen min-h-screen">
				<div className="backdrop-blur-md rounded-xl p-24 bg-slate-200/60 max-w-2xl flex flex-col shadow-xl">
					<img className="avatar" />
					<h1 className="font-bold text-4xl text-center">
						Welcome To The Summit
					</h1>
					{showLogin ? (
						<LoginForm setShowLogin={setShowLogin} showLogin={showLogin} />
					) : (
						<RegisterForm setShowLogin={setShowLogin} />
					)}
				</div>
			</div>
		</>
	);
};

export default LoginPage;
