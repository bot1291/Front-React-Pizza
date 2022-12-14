import { screen, waitFor } from '@testing-library/dom';
import setRender from '../../helpers/setRender';
import { initialState } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';
import { Allpizzas } from './Allpizzas';

describe('Displays all pizzas from backend if there was no any errors and pizza loaded', () => {
	it('If loaded', async () => {
		setRender(<Allpizzas />, {
			pizzaSortReducer: {
				...initialState,
				error: false,
				isLoading: false,
				currentType: 'все',
			},
		});
		await waitFor(() => {
			expect(screen.getByText(/все пиццы/i)).toBeInTheDocument();
		});
		const pizzaWrapperElems = await screen.findAllByTestId('pizza-wrapper');
		expect(pizzaWrapperElems.length).toBeGreaterThan(0);
		expect(pizzaWrapperElems[0]).toBeInTheDocument();
	});

	it('Title changes when category changes', async () => {
		setRender(<Allpizzas />, {
			pizzaSortReducer: {
				...initialState,
				error: false,
				isLoading: false,
				currentType: 'мясная',
			},
		});
		const titleElem = await screen.findByText(/мясные пиццы/i);
		expect(titleElem).toBeInTheDocument();
	});

	it('If error', () => {
		setRender(<Allpizzas />, {
			pizzaSortReducer: {
				...initialState,
				error: true,
				isLoading: false,
				currentType: 'все',
			},
		});
		const errorElem = screen.getByTestId('error');
		expect(errorElem).toBeInTheDocument();
	});

	it('If loading', () => {
		setRender(<Allpizzas />, {
			pizzaSortReducer: {
				...initialState,
				error: false,
				isLoading: true,
				currentType: 'все',
			},
		});
		const titleElem = screen.getByTestId('title');
		const skeletonWrapperElem = screen.getAllByTestId('sleketon-wrapper');
		expect(titleElem).toHaveTextContent(/загрузка пицц/i);
		expect(skeletonWrapperElem).toHaveLength(8);
	});
});
