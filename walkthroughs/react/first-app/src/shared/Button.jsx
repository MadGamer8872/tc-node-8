import { Component } from "react";

class Button extends Component {
  render() {
    const {
      type = "button",
      className = "",
      children,
      id = "",
      onClick,
    } = this.props;

    return (
      <button
        type={type}
        onClick={onClick}
        id={id}
        className={`btn ${className}`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
