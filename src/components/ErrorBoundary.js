import React, { Component } from 'react';

const ErrorBoundary = (WrappedComponent) => {
  return class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }

    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  }
}


export default ErrorBoundary;