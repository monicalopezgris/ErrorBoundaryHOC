import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isError: true
    });
  }

  render() {
    const { isError } = this.state;
    if (isError) {
      throw new Error('Opss!');
    }
    return <button onClick={this.handleClick}>Create error</button>;
  }
}
export default ErrorBoundary(BuggyComponent);