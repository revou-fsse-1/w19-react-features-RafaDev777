import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { RxChevronLeft, RxPlus } from 'react-icons/rx';
import Modal from 'react-modal';
import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface IFormData {
	name: string;
	status: string;
}

const schema = yup.object({
	name: yup.string().required('Please fill in the category name'),
	status: yup.string().required('Please select one'),
});

const DashboardLayout = () => {
	const [isError, setIsError] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const navigate = useNavigate();
	const token = window.localStorage.getItem('key');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });

	const handleAddCategory = async (input: IFormData) => {
		try {
			await axios.post(
				'https://mock-api.arikmpt.com/api/category/create',
				{
					name: input.name,
					is_active: input.status === 'Active' ? true : false,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			navigate('/dashboard');
		} catch (error) {
			setIsError(true);
		}
	};
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
			<div className="container">
				<button onClick={openModal}>
					<RxPlus /> Add new Category
				</button>
				<Outlet />
			</div>
			<Modal
				isOpen={showModal}
				ariaHideApp={false}
				overlayClassName={
					'fixed inset-0 backdrop-blur-md bg-black/50 flex justify-center items-center'
				}
				className={
					'backdrop-blur-md rounded-xl p-20 py-10 bg-slate-200/60 max-w-2xl flex flex-col shadow-xl'
				}
			>
				<div className="flex flex-row items-center">
					<RxChevronLeft onClick={closeModal} className=" text-2xl font-bold" />
					<h2 className="text-2xl font-bold">Add New Category</h2>
				</div>
				<form
					onSubmit={handleSubmit(handleAddCategory)}
					className="flex flex-col mt-10"
				>
					<label>Name</label>
					<input id="name" {...register('name')} />
					{errors?.name && (
						<span className="input-error-message">{errors.name.message}</span>
					)}
					<label className="mt-5">Status</label>
					<select {...register('status')}>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>
					{errors?.status && (
						<span className="input-error-message">{errors.status.message}</span>
					)}
					{isError && (
						<span className="input-error-message mb-2">
							Category already exist please input another one.
						</span>
					)}
					<button className="primary-button self-center mt-5">Add</button>
				</form>
			</Modal>
		</>
	);
};
export default DashboardLayout;
