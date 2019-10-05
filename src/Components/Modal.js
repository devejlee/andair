import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faTimesCircle);

class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="modal">
          <h2>{this.props.title}</h2>
          <div className="modal__content">{this.props.children}</div>
          <div className="toggleBar">
            <button className="toggleBar__button" onClick={this.onClose}>
              <FontAwesomeIcon size="3x" icon={["far", "times-circle"]} />
            </button>
          </div>
        </div>
        <div className="modal--overlay" />
      </React.Fragment>
    );
  }
}

export default Modal;
