import React, { Component } from "react";
import PoemCard from "./PoemCard";

class Poems extends Component {
  render() {
    var data = this.props.data;
    const listItems = data.map(poem => <PoemCard poem={poem} />);
    return listItems;
  }
}

export default Poems;
