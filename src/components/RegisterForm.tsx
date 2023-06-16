import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormData {
	name: string;
	email: string;
	password: string;
}
const schema = yup.object({
	name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
});

const RegisterForm = () => {
	// # Validation Function --------------------------
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	// # Services?
	const handleRegister = () => {
		return null;
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
				<span className="mt-[0.25rem] text-sm text-red-600">
					{errors.name.message}
				</span>
			)}

			<input
				id="email"
				className="input-style mt-4"
				placeholder="Please enter your email"
			></input>
			<input
				id="password"
				type="password"
				className="input-style mt-4"
				placeholder="Enter your password"
			></input>
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
