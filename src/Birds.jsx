import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class Birds extends Component {
	handleSubmit = e => {
		e.preventDefault();

		console.log(e);

		this.props.BirdStore.addBird(this.birdInput.value);
		e.target.reset();
	};

	render() {
		const { BirdStore } = this.props;

		return (
			<div>
				{console.log(this.props.BirdStore)}
				<h2>You have {BirdStore.birdCount} birds</h2>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input
						type='text'
						placeholder='Enter Bird'
						ref={input => (this.birdInput = input)}
					/>
					<button>Add Bird</button>
				</form>
				<ul>
					{BirdStore.birds.map(eachBird => (
						// console.log(eachBird);
						<li key={eachBird}>{eachBird}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Birds;
