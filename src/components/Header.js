import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = props =>
	<View style={styles.header}>
		{props.children}
	</View>;

Header.defaultProps = {
	children: <Text>Some text</Text>
};

Header.propTypes = {
	children: PropTypes.element
};

const white = '#fff';
const black = '#000';

const styles = {
	header: {
		alignSelf: 'stretch',
		backgroundColor: white,
		elevation: 4,
		flex: 1,
		justifyContent: 'center',
		shadowColor: black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2
	}
};

export default Header;
