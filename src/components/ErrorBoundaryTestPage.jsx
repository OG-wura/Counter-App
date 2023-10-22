import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ErrorContext = React.createContext();

class ErrorBoundaryTestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error);
    console.error('Error boundary error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContext.Provider value={this.state.error}>
          <div>
            <h1>Something went wrong. Please try again later.</h1>
            <Link to='/'>
              <button>Back to Home</button>
            </Link>
          </div>
        </ErrorContext.Provider>
      );
    }

    return this.props.children;
  }
}

ErrorBoundaryTestPage.propTypes = {
  children: PropTypes.node, // Validate that "children" is a valid node (component or element).
};

export { ErrorBoundaryTestPage, ErrorContext };
