import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import { FC, useEffect } from 'react';
import cn from 'classnames';
import { FcBinoculars } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { pizzaSortSlice } from '../../store/reducers/PizzaSortSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const Search: FC<SearchProps> = ({ className, ...props }) => {
	const dispatch = useAppDispatch();
	const { search, unset, setSearchValue } = pizzaSortSlice.actions;
	const { searchValue } = useAppSelector((state) => state.pizzaSortReducer);

	useEffect(() => {
		dispatch(search(searchValue));
	}, [dispatch, search, searchValue]);

	const handlerSearch = (currentValue: string) => {
		dispatch(setSearchValue(currentValue));
		if (!currentValue) {
			dispatch(unset());
			return;
		}
		dispatch(search(searchValue));
	};
	return (
		<div className={styles.wrapper}>
			<input
				placeholder="Поиск..."
				onChange={(e) => handlerSearch(e.currentTarget.value)}
				value={searchValue}
				className={cn(className, styles.search)}
				{...props}
			/>
			<button className={styles.icon}>
				<IconContext.Provider
					value={{
						size: '30px',
					}}>
					<FcBinoculars />
				</IconContext.Provider>
			</button>
		</div>
	);
};
