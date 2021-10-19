import styled from 'styled-components';
export const Table = styled.table`
	width: 100%;
	background-color: #fff;
	padding: 20px;
	box-shadow: 0px 0px 5px #ccc;
	border-radius: 10px;
	margin-top: 20px;
`;
export const TableHeadColumn = styled.th<{width?: number}>`
	width: ${props => props.width ? `${props.width}px` : 'auto'};
	padding: 10px 0;
	text-align: left;
`;
//Esse <width: number> e uma forma de passar a prop para ca, se vc nao fizer isso o TS vai dizer que TableHeadColumn nao precisa de prop, o ? e pq existe alguns th que nao tem essa prop, entao deixamos ela opcional