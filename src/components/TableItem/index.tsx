import * as C from './styled';
import {Item} from '../../types/Item';
import {formatDate} from '../../helpers/dateFilters';
import {categories} from '../../data/categories';
type Props = {
	item: Item
}//Esse aqui nao e mais do tipo Item[] pq e um objeto so, e so um item, entao nao e array
export const TableItem = ({item}: Props) => {
	return (
			<C.TableLine>
				<C.TableColumn>{formatDate(item.date)}</C.TableColumn>
				<C.TableColumn>
					<C.Category color={categories[item.category].color}>
						{categories[item.category].title}
					</C.Category>
				</C.TableColumn>{/*Outra forma de acessar um obj, em vez de categories.algumaCoisa, esse algumaCoisa vc pode colocar assim [algumaCoisa], tmbm funciona*/}
				<C.TableColumn>{item.title}</C.TableColumn>
				<C.TableColumn>
					<C.Value color={categories[item.category].expense ? 'red' : 'green'}>
						R$ {item.value}
					</C.Value>
				</C.TableColumn>
			</C.TableLine>
		);
}