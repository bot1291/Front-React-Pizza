import styles from './ContentTop.module.scss';
import { ContentTopProps } from './ContentTop.props';
import cn from 'classnames';
import { FC } from 'react';
import { Categories } from '../Categories/Categories';
import { Sort } from '../Sort/Sort';
import { useAppSelector } from '../../hooks/redux';
import { CategoriesSkeleton } from '../CategoriesSkeleton/CategoriesSkeleton';
import sortParams from '../../helpers/sortParams';

export const ContentTop: FC<ContentTopProps> = ({ className, ...props }) => {
	const { error, isLoading } = useAppSelector(
		(state) => state.pizzaSortReducer
	);

	return (
		<div className={cn(className, styles.contentTop)} {...props}>
			{isLoading || error ? (
				<CategoriesSkeleton count={4} />
			) : (
				<>
					<Categories />
					<Sort sortParams={sortParams} />
				</>
			)}
		</div>
	);
};
