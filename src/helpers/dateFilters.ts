import {Item} from '../types/Item';
//Esse arquivo e simplesmente para nos ajudar a separar melhor, as funcoes vao ficar aqui
export const getCurrentMonth = () => {
	let now = new Date();
	return `${now.getFullYear()} - ${now.getMonth() + 1}`;
}//Essa funcao simplesmente retorna o anoAtual - MesAtual

export const filterListByMonth = (list: Item[], date: string): Item[] => {//Recebe a lista original + uma data
	let newList: Item[] = [];
	let [year, month] = date.split('-');
	for (let i in list) {
		if (
				list[i].date.getFullYear() === parseInt(year) && 
				(list[i].date.getMonth() + 1) === parseInt(month)
			) 
		{
				newList.push(list[i]);
		}//E possivel fazer list[i].date.getFullYear() pq list[i].date e uma data, logo tem o metodo getFullYear
	}
	return newList;
}//Essa funcao simplesmente cria a nova lista, filtrada ja com o mes e ano escolhido pelo cidadao.

export const formatDate = (date: Date): string => {
	let year = date.getFullYear();//Nao preciso tipar nenhum desses pq eles ja retornam certo (number), da para ver no VSCode passando o mouse
	let month = date.getMonth() + 1;
	let day = date.getDate();
	return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}`: `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
	let [year, month] = currentMonth.split('-');
	let months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 
		'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
		return `${months[parseInt(month) - 1]} de ${year}`;
}