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
    console.log(error.message);
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
                console.log("authenticate");
                return (
                  <BackHome
                    error="401"
                    reason="Please Login in."
                    isLogin={true}
                  />
                );
              case "authorize failed":
                console.log("authorize");
                return (
                  <BackHome
                    error="403"
                    reason="Please Upgrade Your Account."
                    isLogin={false}
                  />
                );
              default:
                console.log("default");
                return (
                  <BackHome
                    error="404"
                    reason="The page you are looking for does not exist."
                  />
                );
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
