import { IPizza } from '../../../../interfaces/IPizza';
import pizzasSortReducer, { search, initialState } from '../PizzaSortSlice';

const startedPizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Пицца бургер',
		rating: 3,
		types: ['мясная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
		],
	},
	{
		_id: '2',
		currentPrice: 300,
		image: 'http://google.com/image1',
		title: 'С семгой',
		rating: 1,
		types: ['рыбная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 300,
			},
		],
	},
	{
		_id: '3',
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'Шеф-пицца',
		rating: 5,
		types: ['мясная', 'сырная'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{
				size: '26',
				price: 200,
			},
			{
				size: '30',
				price: 400,
			},
		],
	},
];

const pizzaBurger: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Пицца бургер',
		rating: 3,
		types: ['мясная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
		],
	},
];

const meatPizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Пицца бургер',
		rating: 3,
		types: ['мясная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
		],
	},
	{
		_id: '3',
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'Шеф-пицца',
		rating: 5,
		types: ['мясная', 'сырная'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{
				size: '26',
				price: 200,
			},
			{
				size: '30',
				price: 400,
			},
		],
	},
];

const salmonPizzas: IPizza[] = [
	{
		_id: '2',
		currentPrice: 300,
		image: 'http://google.com/image1',
		title: 'С семгой',
		rating: 1,
		types: ['рыбная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 300,
			},
		],
	},
];

describe('Set pizzas according to seacrh value', () => {
	it('Seacrh for pizza burger', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: startedPizzas,
				pizzasBackup: startedPizzas,
			},
			search('пицца БУРГЕР')
		);
		expect(changedState.pizzas).toHaveLength(1);
		expect(changedState.pizzas).toStrictEqual(pizzaBurger);
		expect(changedState.pizzasBackup).toStrictEqual(startedPizzas);
	});

	it('Seacrh for meat pizzas', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: startedPizzas,
				pizzasBackup: startedPizzas,
			},
			search('Мя с н ')
		);
		expect(changedState.pizzas).toHaveLength(2);
		expect(changedState.pizzas).toStrictEqual(meatPizzas);
		expect(changedState.pizzasBackup).toStrictEqual(startedPizzas);
	});

	it('Seacrh for pizzas with salmon', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: startedPizzas,
				pizzasBackup: startedPizzas,
			},
			search('семг')
		);
		expect(changedState.pizzas).toHaveLength(1);
		expect(changedState.pizzas).toStrictEqual(salmonPizzas);
		expect(changedState.pizzasBackup).toStrictEqual(startedPizzas);
	});

	it('Not found search value', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: startedPizzas,
				pizzasBackup: startedPizzas,
			},
			search('not found value')
		);
		expect(changedState.pizzas).toHaveLength(0);
		expect(changedState.pizzas).toStrictEqual([]);
		expect(changedState.pizzasBackup).toStrictEqual(startedPizzas);
	});
});
