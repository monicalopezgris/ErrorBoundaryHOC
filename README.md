## ErrorBoundary HOC

This is a reusable ErrorBaundary HOC to use in personal projects.

This example has 2 components:

### BuggyComponent

Component with:
~~~
this.state = {
  isError: false
}
~~~

And a Button with an onClick function that changes the state of isError to true.

When isError is true it throws an error.

### ErrorBoundary

Regular Error Boundary made in HOC that caches the error on the wrapped component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
