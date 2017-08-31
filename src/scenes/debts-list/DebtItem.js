import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';

const DebtItem = ({ item }) => {
	const { containerStyle, cardStyle } = styles;
	const { key, date, who, action, amount, currency } = item;

	return (
		<Card
			key={key}
			containerStyle={containerStyle}
			wrapperStyle={cardStyle}
		>
			<Text>
				{date}
			</Text>
			<Text>
				{who} {action}
			</Text>
			<Text>
				{`${amount} ${currency}`}
			</Text>
		</Card>
	);
};

DebtItem.propTypes = {
	item: PropTypes.shape({
		key: PropTypes.string,
		date: PropTypes.string,
		who: PropTypes.string,
		action: PropTypes.string,
		amount: PropTypes.number,
		currency: PropTypes.string
	}).isRequired
};

const styles = {
	cardStyle: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	containerStyle: {
		margin: 7
	},
	textStyle: {
		flex: 1
	}
};

export default DebtItem;
