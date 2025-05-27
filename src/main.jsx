import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PhoneBook } from './phoneBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PhoneBook />
	</React.StrictMode>,
);
