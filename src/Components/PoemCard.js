import React, { Component } from "react";
import Modal from "./Modal";

class Poems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
    this.toggleScrollLock();
  };

  toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  render() {
    const { poem } = this.props;

    return (
      <>
        <article
          key={poem.id}
          onClick={e => {
            this.showModal(e);
          }}
        >
          <h2 className="cardTitle">{poem.title}</h2>
          <img src={poem.src} alt={poem.alt} />
        </article>
        <Modal
          onClose={this.showModal}
          show={this.state.show}
          title={poem.title}
        >
          <p>{poem.line1}</p>
          <p>{poem.line2}</p>
          <p>{poem.line3}</p>
          <p>{poem.line4}</p>
        </Modal>
      </>
    );
  }
}

export default Poems;
