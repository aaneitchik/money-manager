import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { FormLabel, FormInput } from 'react-native-elements';

const FormField = props => {
	const { labelStyle, inputContainerStyle } = styles;
	const { label, ...inputProps } = props;
	return (
		<View>
			<FormLabel labelStyle={labelStyle}>
				{label}
			</FormLabel>
			<FormInput {...inputProps} containerStyle={inputContainerStyle} />
		</View>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired
};

const styles = {
	labelStyle: {
		marginLeft: 0,
		marginRight: 0
	},
	inputContainerStyle: {
		marginLeft: 0,
		marginRight: 0
	}
};

export default FormField;
