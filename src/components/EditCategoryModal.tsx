import Modal from 'react-modal';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RxChevronLeft } from 'react-icons/rx';

interface IFormData {
	id: string;
	name: string;
	status: boolean;
	closeModal: () => void;
}
const schema = yup.object({
	name: yup.string().required(),
	status: yup.string().required(),
});

const EditCategoryModal = ({ id, closeModal }: IFormData) => {
	const [isError, setIsError] = useState(false);
	const token = window.localStorage.getItem('token');
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const getCategoryById = async (id: string) => {
		try {
			const { data } = await axios.get(
				`https://mock-api.arikmpt.com/api/category/${id}`,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			reset({
				name: data.data.name,
				status: data.data.is_active ? 'Active' : 'Inactive',
			});
			closeModal;
			console.log(data);
		} catch (error) {
			setIsError(true);
		}
	};

	const handleEditCategory = async (input: {
		name: string;
		status: string;
	}) => {
		try {
			await axios.put(
				'https://mock-api.arikmpt.com/api/category/update',
				{
					id: id,
					name: input.name,
					is_active: input.status === 'Active' ? true : false,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			closeModal();
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		if (token) {
			getCategoryById(id);
		}
	}, [token]);
	return (
		<>
			<Modal
				isOpen={true}
				ariaHideApp={false}
				overlayClassName={
					'backdrop-blue-md fixed inset-0 backdrop-blur-md bg-black/50 flex justify-center items-center'
				}
				className={
					'backdrop-blur-md rounded-xl p-20 py-10 bg-slate-200/60 max-w-2xl flex flex-col shadow-xl'
				}
			>
				<div className="flex flex-row items-center">
					<RxChevronLeft onClick={closeModal} className=" text-2xl font-bold" />
					<h2 className="text-2xl font-bold">Edit Category</h2>
				</div>
				<form
					onSubmit={handleSubmit(handleEditCategory)}
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
					<button type="submit" className="primary-button self-center mt-5">
						Edit
					</button>
				</form>
			</Modal>
		</>
	);
};
export default EditCategoryModal;
