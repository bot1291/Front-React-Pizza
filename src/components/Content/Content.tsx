import styles from './Content.module.scss';
import { ContentProps } from './Content.props';
import cn from 'classnames';
import { FC } from 'react';
import { ContentTop } from '../ContentTop/ContentTop';
import { Allpizzas } from '../Allpizzas/Allpizzas';

export const Content: FC<ContentProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.content)} {...props}>
			<div className={styles.container}>
				<ContentTop />
				<h2 className={styles.title}>Все пиццы</h2>
				<Allpizzas />
			</div>
		</div>
	);
};