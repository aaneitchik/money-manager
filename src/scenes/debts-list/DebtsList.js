import React from 'react';
import { List } from 'react-native-elements';

import DebtItem from './DebtItem';

const list = [
	{
		key: '1',
		date: '12.05.2017',
		who: 'Parents',
		action: 'took',
		amount: 300,
		currency: 'USD'
	},
	{
		key: '2',
		date: '25.06.2017',
		who: 'Anton',
		action: 'gave',
		amount: 500,
		currency: 'EUR'
	},
	{
		key: '3',
		date: '08.07.2017',
		who: 'Olya',
		action: 'took',
		amount: 200,
		currency: 'RUB'
	}
];

const DebtsList = () =>
	<List style={styles.list}>
		{list.map(item => <DebtItem key={item.key} item={item} />)}
	</List>;

const styles = {
	list: {
		flex: 1,
		paddingTop: 7
	}
};

export default DebtsList;
