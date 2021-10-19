import * as C from './styled';
import {Item} from '../../types/Item';
import {TableItem} from '../TableItem';
type Props = {
	list: Item[]
}//Lembrando, quando voce passa uma prop para um componente, vc precisa dizer(Criar) o tipo dela
export const TableArea = ({list}: Props) => {
	return (
			<C.Table>
				<thead>
					<tr>
						<C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
						<C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
						<C.TableHeadColumn>Titulo</C.TableHeadColumn>
						<C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
					</tr>
				</thead>

				<tbody>
					{list.map((item, index)=>(
							<TableItem key={index} item={item}/>//TableItem representa cada td
						))}
				</tbody>
			</C.Table>
		);
}