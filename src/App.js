import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyComponent from './components/BuggyComponent';
import './App.css';

function App() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.x
          <br /><br />
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These components are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyComponent />
        <BuggyComponent />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyComponent /></ErrorBoundary>
      <ErrorBoundary><BuggyComponent /></ErrorBoundary>
    </div>
  );
}
export default App;
