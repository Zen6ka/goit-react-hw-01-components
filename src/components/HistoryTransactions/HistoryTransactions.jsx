import {
	TransactionTable,
	TableHead,
	TableColumn,
	ColumnName,
	TableBody,
	TableElement,
} from './HistoryTransactions.styled';

export const TransactionHistory = ({ items }) => {
return (
	<TransactionTable>
		<TableHead>
			<TableColumn>
				<ColumnName>Type</ColumnName>
				<ColumnName>Amount</ColumnName>
				<ColumnName>Currency</ColumnName>
			</TableColumn>
		</TableHead>

<TableBody>
{items.map(item => {
	return (
		<TableRow
		key={item.id}
		id={item.id}
		type={item.type}
		currency={item.currency}
		amount={item.amount}/>
);})}
</TableBody>

</TransactionTable>
);
};

const TableRow = ({ type, amount, currency }) => {
	return (
	<TableColumn>
		<TableElement>{type}</TableElement>
		<TableElement>{amount}</TableElement>
		<TableElement>{currency}</TableElement>
	</TableColumn>
);
};