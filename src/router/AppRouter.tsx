import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart, Content, NotFound } from '../components';
import { MainLayout } from '../layouts/MainLayout';

export const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Content />} />
				<Route path="/*" element={<NotFound />} />
				<Route path="/cart" element={<Cart />} />
			</Route>
		</Routes>
	);
};
