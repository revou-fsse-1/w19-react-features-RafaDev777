import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	return (
		<div className=" flex flex-col justify-center items-center w-screen min-h-screen">
			<div className="backdrop-blur-md rounded-xl p-24 bg-slate-200/60 max-w-2xl flex flex-col shadow-xl">
				<h1>Hola Amigos</h1>
				<Outlet />
			</div>
		</div>
	);
};
export default DashboardLayout;
