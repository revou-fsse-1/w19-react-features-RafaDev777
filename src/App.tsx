import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomeLayout from './layouts/WelcomeLayout';
import RegisterPage from './pages/RegisterPage';
import DashboardLayout from './layouts/DashboardLayout';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import DashboardPage from './pages/DashboardPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WelcomeLayout />}>
					<Route index element={<LoginPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
				</Route>
				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route index element={<DashboardPage />} />
					<Route path="1" element={<Test />} />
					<Route path="2" element={<Test2 />} />
				</Route>
				<Route
					path="*"
					element={<div className="text-3xl font-bold">error Choy</div>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
