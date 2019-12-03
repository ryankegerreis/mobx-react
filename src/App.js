import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import BirdStore from './Stores/BirdStore';
import Birds from './Birds';

class App extends Component {
	render() {
		return (
			<Provider BirdStore={BirdStore}>
				<Birds />
			</Provider>
		);
	}
}

export default App;
