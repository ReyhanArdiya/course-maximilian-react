import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
	state = {
		isModalOpen: false,
		showBlock: false
	};

	showModal() {
		this.setState({
			isModalOpen: true
		});
	}

	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>
				<Modal
					closed={this.closeModal.bind(this)}
					show={this.state.isModalOpen}
				/>
				<Backdrop
					closed={this.closeModal.bind(this)}
					show={this.state.isModalOpen}
				/>
				<button className="Button" onClick={this.showModal.bind(this)}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
