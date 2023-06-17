import axios from 'axios';
import DataRow from '../components/DataRow';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { RxChevronLeft, RxPlus } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from 'react-modal';
interface ICategory {
	id: string;
	name: string;
	is_active: boolean;
	created_at: Date;
	updated_at: Date;
}
interface IFormData {
	name: string;
	status: string;
}

const schema = yup.object({
	name: yup.string().required('Please fill in the category name'),
	status: yup.string().required('Please select one'),
});
const DashboardPage = () => {
	const token = window.localStorage.getItem('token');
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [isError, setIsError] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

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
			setShowModal(false);
		} catch (error) {
			setIsError(true);
		}
	};

	const fetchCategories = async () => {
		try {
			const { data } = await axios.get(
				'https://mock-api.arikmpt.com/api/category',
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			console.log(data);
			setCategories(data.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (token) {
			fetchCategories();
		}
	}, []);

	const deleteCategoryFromState = (id: string) => {
		const filteredCategories = [...categories].filter(
			(category) => category.id !== id
		);

		setCategories(filteredCategories);
	};

	return (
		<>
			<div className="container flex">
				<div className="w-full">
					<button
						onClick={openModal}
						className="primary-button mt-16 mb-5 flex flex-row items-center self-start"
					>
						<RxPlus />
						<p> Add new Category</p>
					</button>
					<div>
						<table className="text-left w-full overflow-hidden rounded-xl shadow-xl">
							<thead className="bg-slate-500/60">
								<tr className="">
									<th className="px-5 py-3">ID</th>
									<th>NAME</th>
									<th>STATUS</th>
									<th className="pl-10">ACTION</th>
								</tr>
							</thead>
							<tbody className="bg-slate-200/60">
								{categories.map((category) => (
									<DataRow
										key={category.id}
										id={category.id}
										name={category.name}
										status={category.is_active}
										deleteCategoryFromState={deleteCategoryFromState}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
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
export default DashboardPage;
