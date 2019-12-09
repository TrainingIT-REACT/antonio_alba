import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError() {
    return {
      error: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  onClick() {
    this.props.onReset();
    this.setState({ error: false });
  }

  render() {
    const { error } = this.state;

    return (
      <>
        { this.state.error === true &&
          <div className={`error ${this.props.wrap ? 'section' : ''}`}>
            <p className="error-message">{this.props.message ? this.props.message : 'Something goes wrong.'}</p>
            <p>Please, <a href="#" onClick={this.onClick}><u>Try again</u></a>.</p>
          </div>
          || this.props.children
        }
      </>
    );
  }
}

export default ErrorBoundary;
