import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

interface IFormData {
	name: string;
	email: string;
	password: string;
}

const schema = yup.object({
	name: yup.string().required('Please fill in your full name'),
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

const RegisterForm = () => {
	const navigate = useNavigate();
	// # Validation Function --------------------------
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });

	// # Services?
	const handleRegister = async (input: IFormData) => {
		try {
			await axios.post('https://mock-api.arikmpt.com/api/user/register', {
				name: input.name,
				email: input.email,
				password: input.password,
			});

			navigate('/login');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(handleRegister)}
			className="flex-col items-center flex text-center"
		>
			<input
				id="name"
				{...register('name')}
				className="input-style mt-10"
				placeholder="Enter your username"
			></input>
			{errors?.name && (
				<span className="input-error-message">{errors.name.message}</span>
			)}

			<input
				id="email"
				{...register('email')}
				className="input-style mt-4"
				placeholder="Please enter your email"
			></input>
			{errors?.email && (
				<span className="input-error-message">{errors.email.message}</span>
			)}
			<input
				id="password"
				{...register('password')}
				type="password"
				className="input-style mt-4"
				placeholder="Enter your password"
			></input>
			{errors?.password && (
				<span className="input-error-message">{errors.password.message}</span>
			)}
			<button type="submit" className="primary-button mt-10">
				Register
			</button>

			<p className="mt-5 text-xs italic text-slate-500">
				Already have an account?{' '}
				<Link to="/login" className="text-sky-600">
					Login
				</Link>
			</p>
		</form>
	);
};
export default RegisterForm;
