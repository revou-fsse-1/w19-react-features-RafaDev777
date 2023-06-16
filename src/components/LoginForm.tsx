import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
interface IFormData {
	email: string;
	password: string;
}

const schema = yup.object({
	email: yup
		.string()
		.email('Please enter a valid email address')
		.required('Please fill in your emal address'),
	password: yup
		.string()
		.min(5, 'Your password must have minimum 5 digit')
		.matches(
			/^(?=.*[0-9])(?=.*[a-zA-Z])/,
			'Your password must containt at least 1 number and 1 letter'
		)
		.required('Please fill in your password'),
});

const LoginForm = () => {
	// # Validation Function --------------------------
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });

	// # Form Business Function -----------------------
	const [isError, setIsError] = useState(false);
	const navigate = useNavigate();
	const handleLogin = async (input: IFormData) => {
		try {
			const { data } = await axios.post(
				'https://mock-api.arikmpt.com/api/user/login',
				{
					email: input.email,
					password: input.password,
				}
			);

			localStorage.setItem('token', data.data.token);

			navigate('/dashboard');
		} catch (error) {
			setIsError(true);
		}
	};

	// # Test Purpose Function------------------------

	return (
		<>
			<form
				onSubmit={handleSubmit(handleLogin)}
				className="flex-col items-center flex opacity-100 transition-opacity ease-in text-center"
			>
				<input
					id="email"
					{...register('email')}
					className="input-style mt-5"
					placeholder="Please enter your username"
				></input>
				{errors?.email && (
					<span className="input-error-message">{errors.email.message}</span>
				)}
				<input
					id="password"
					{...register('password')}
					type="password"
					className="input-style mt-4"
					placeholder="Please enter your password"
				></input>
				{errors?.password && (
					<span className="input-error-message">{errors.password.message}</span>
				)}
				<div className="flex flex-col items-center mt-10">
					{isError && (
						<span className="input-error-message mb-2">
							Please check again your email and password.
						</span>
					)}
					<button type="submit" className="primary-button">
						Login
					</button>
				</div>
				<p className="mt-2 text-sm italic text-slate-500 transition ease-in-out duration-300">
					Don't have any account?{' '}
					<Link to="/register" className="text-sky-600">
						Register
					</Link>
				</p>
			</form>
		</>
	);
};
export default LoginForm;
