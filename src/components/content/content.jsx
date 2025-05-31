import { NavLink } from 'react-router-dom';
import css from './content.module.scss';
export const Content = () => {
	let isActive = true;

	return (
		<nav>
			<div className={css.content}>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.navlink : css.active
							}
							to="/basic"
						>
							Основной
						</NavLink>
					</li>
					<br />
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? css.navlink : css.active
							}
							to="/post"
						>
							Подразделения
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
