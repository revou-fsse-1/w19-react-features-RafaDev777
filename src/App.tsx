import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomeLayout from './layouts/WelcomeLayout';
import RegisterPage from './pages/RegisterPage';
import DashboardLayout from './layouts/DashboardLayout';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
import { useMemo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PrivateOutlet = () => {
	const token = window.localStorage.getItem('token');
	const navigate = useNavigate();
	const isAuth = useMemo(() => !!token, [navigate]);
	return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition key={location.key} timeout={500} className="page">
				<Routes>
					<Route path="/" element={<WelcomeLayout />}>
						<Route index element={<LoginPage />} />
						<Route path="login" element={<LoginPage />} />
						<Route path="register" element={<RegisterPage />} />
					</Route>
					<Route element={<PrivateOutlet />}>
						<Route path="/dashboard" element={<DashboardLayout />}>
							<Route index element={<DashboardPage />} />
							<Route path="1" element={<Test />} />
							<Route path="2" element={<Test2 />} />
						</Route>
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};
function App() {
	return (
		<div className="w-screen">
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
