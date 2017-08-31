import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import FormField from '../../components/FormField';

class LoginForm extends React.Component {
	render() {
		const {
			buttonContainerStyle,
			cardContainerStyle,
			dividerStyle,
			keyboardAvoidingStyle
		} = styles;
		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={keyboardAvoidingStyle}
			>
				<Card
					containerStyle={cardContainerStyle}
					dividerStyle={dividerStyle}
				>
					<FormField label="EMAIL" />
					<FormField label="PASSWORD" />
					<Button
						title="LOG IN"
						containerViewStyle={buttonContainerStyle}
						backgroundColor="#2f9689"
					/>
				</Card>
			</KeyboardAvoidingView>
		);
	}
}

const styles = {
	keyboardAvoidingStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '95%'
	},
	cardContainerStyle: {
		width: '100%'
	},
	dividerStyle: {
		display: 'none'
	},
	buttonContainerStyle: {
		marginLeft: 0,
		marginRight: 0,
		marginTop: 20
	}
};

export default LoginForm;
