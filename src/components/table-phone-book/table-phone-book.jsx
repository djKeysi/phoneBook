import css from './table-phone-book.module.scss';
export const TablePhoneBook = () => {
	return (
		<table className={css.table}>
			<thead>
				<tr>
					<th>Номер</th>
				</tr>
			</thead>
		</table>
	);
};
