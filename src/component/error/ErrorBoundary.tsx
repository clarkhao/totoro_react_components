import React, { Component, ErrorInfo, Fragment, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  msg: string;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      msg: "",
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error.message, errorInfo);
    this.setState({ hasError: true, msg: error.message });
  }

  componentWillUnmount(): void {}

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          {(() => {
            switch (this.state.msg) {
              case "authenticate failed":
                return <></>;
              case "authorize failed":
                console.log("authorize");
                return <></>;
              default:
                console.log("default");
                return <></>;
                break;
            }
          })()}
        </Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
