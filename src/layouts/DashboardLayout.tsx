import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';

const DashboardLayout = () => {
	return (
		<>
			<div className="flex justify-center w-screen">
				<div className="container flex flex-row justify-between items-center backdrop-blur-md rounded-xl p-4 bg-slate-200/30 shadow-xl mt-3">
					<div className="flex items-center">
						<Logo />
						<p
							className="text-4xl font-bold tracking-wider
					 ml-2"
						>
							TheSummit
						</p>
					</div>
					<button className="primary-button">Logout</button>
				</div>
			</div>
			<div className="flex justify-center w-screen">
				<div className="container flex flex-col items-center ">
					<Outlet />
				</div>
			</div>
		</>
	);
};
export default DashboardLayout;
