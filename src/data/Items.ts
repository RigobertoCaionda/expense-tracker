import {Item} from '../types/Item';
export const items: Item[] = [//Temos um array do tipo item, por ser um array colocamos o []
	{ date: new Date(2021, 9, 6), category: 'food', title: 'McDonalds', value: 32.12 },
	{ date: new Date(2021, 9, 15), category: 'food', title: 'Burguer King', value: 28 },
	{ date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
	{ date: new Date(2021, 10, 18), category: 'salary', title: 'Salario ACME', value: 4500 }
];//Estamos a exportar um array de objs, nao e state, e um array normal