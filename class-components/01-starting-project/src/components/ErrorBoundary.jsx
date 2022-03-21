import { Component } from "react";

export class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hasError: false };
	}

    componentDidCatch(err) {
        this.setState({hasError: true})
    }

	render() {
		return this.state.hasError ? <p>Something went wrong!</p> : this.props.children;
	}
}