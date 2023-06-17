import axios from 'axios';
import { useState } from 'react';
import EditCategoryModal from './EditCategoryModal';
import { HiXCircle } from 'react-icons/hi';

interface DataRowProps {
	id: string;
	name: string;
	status: boolean;
	deleteCategoryFromState: (id: string) => void;
}

const DataRow = ({
	id,
	name,
	status,
	deleteCategoryFromState,
}: DataRowProps) => {
	const [showModal, setShowModal] = useState(false);
	const token = window.localStorage.getItem('token');

	const deleteCategory = async () => {
		try {
			await axios.delete(`https://mock-api.arikmpt.com/api/category/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			deleteCategoryFromState(id);
			console.log('1');
		} catch (error) {
			console.error(error);
		}
	};

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);
	return (
		<>
			<tr className="">
				<td className="px-5 py-6">{id}</td>
				<td>{name}</td>
				<td className="flex flex-row items-center py-6">
					<HiXCircle
						className={
							status ? 'text-sky-400 animate-ping mr-2' : 'text-slate-600 mr-2'
						}
					/>
					{status ? 'active' : 'inactive'}
				</td>
				<td className="pl-10">
					<button onClick={openModal} className="primary-button">
						Edit
					</button>
					<button onClick={deleteCategory} className="primary-button ml-5">
						Delete
					</button>
				</td>

				{showModal && (
					<EditCategoryModal
						id={id}
						name={name}
						status={status}
						closeModal={closeModal}
					/>
				)}
			</tr>
		</>
	);
};
export default DataRow;
