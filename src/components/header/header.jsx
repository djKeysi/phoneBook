import css from './header.module.scss';

export const Header = () => {
	return (
		<header className={css.header}>
			<h1>Телефонный справочник НВГСО</h1>
			<div>
				Войти
				<i className="fa fa-sign-in" aria-hidden="true"></i>
			</div>
		</header>
	);
};

// <i class="fa fa-sign-out" aria-hidden="true"></i> exit

// <i class="fa fa-sign-in" aria-hidden="true"></i> login
