import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import { Content, Header, TablePhoneBook } from './components';
export const PhoneBook = () => {
	return (
		// <div className={styles.app}>
		// 	<div></div>
		// </div>
		<div>
			<Header />
			<Content />
			<Routes>
				<Route path="/login" element={<TablePhoneBook />} />
			</Routes>
		</div>
	);
};
