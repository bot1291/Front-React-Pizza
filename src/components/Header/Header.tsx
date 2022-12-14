import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { FC } from 'react';
import { CartButton, Logo, Search } from '..';
import { Link } from 'react-router-dom';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<div className={cn(styles.header, className)} {...props}>
			<div className={styles.container}>
				<Link
					data-testid="header-link"
					to="/"
					className={cn(styles.logoBlock)}>
					<Logo className={cn(styles.logo)} />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкатывающая пицца во вселенной</p>
					</div>
				</Link>
				<Search className={styles.search} />
				<CartButton link="/cart" />
			</div>
		</div>
	);
};
