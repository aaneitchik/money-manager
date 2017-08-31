import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import Header from './src/components/Header';
import DebtsList from './src/scenes/debts-list/DebtsList';
import LoginForm from './src/scenes/login-form/LoginForm';

export default class App extends React.Component {
	componentDidMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCNCRhv0hSQ4DuLtIOuHRUi_8H8M8q8lpA',
			authDomain: 'debts-manager.firebaseapp.com',
			databaseURL: 'https://debts-manager.firebaseio.com',
			projectId: 'debts-manager',
			storageBucket: 'debts-manager.appspot.com',
			messagingSenderId: '55228280318'
		});
	}

	render() {
		/*
		* <Header style={styles.header} />
				<View style={styles.content}>
					<DebtsList />
				</View>
		*/
		return (
			<View style={styles.container}>
				<LoginForm />
			</View>
		);
	}
}

const white = '#fff';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: white,
		flex: 1,
		justifyContent: 'center',
		paddingTop: StatusBar.currentHeight
	},
	header: {
		display: 'flex',
		flex: 1
	},
	content: {
		alignSelf: 'stretch',
		flex: 10
	}
});
