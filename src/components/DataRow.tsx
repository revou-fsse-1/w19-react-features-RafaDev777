import axios from 'axios';
import { useState } from 'react';
import EditCategoryModal from './EditCategoryModal';

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
			<tr>
				<td>{id}</td>
				<td>{name}</td>
				<td>{status ? 'active' : 'inactive'}</td>
				<td>
					<button onClick={openModal} className="primary-button">
						Edit
					</button>
					<button onClick={deleteCategory} className="primary-button">
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
