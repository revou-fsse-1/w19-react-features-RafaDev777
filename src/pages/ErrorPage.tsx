import { Link } from 'react-router-dom';
import { RxArrowLeft } from 'react-icons/rx';

const ErrorPage = () => {
	return (
		<div className=" flex flex-col justify-center items-center w-screen min-h-screen">
			<div className="backdrop-blur-md rounded-xl p-24 bg-slate-200/60 max-w-2xl flex flex-col shadow-xl text-center items-center">
				<h1 className=" text-7xl font-bold tracking-widest">404</h1>
				<h2 className="text-3xl font-bold tracking-wide">
					Oops! Page Not Found
				</h2>
				<p className="mt-10">
					Sorry, the page you're looking for doesn't exist. If you think
					something is broken, report a problem.
				</p>
				<Link
					to="/"
					className="primary-button mt-10 flex flex-row items-center"
				>
					<RxArrowLeft className="mr-4 text-lg " />
					Back to home
				</Link>
			</div>
		</div>
	);
};
export default ErrorPage;
