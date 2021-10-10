import React from "react";
import CardList from "./components/CardList/CardList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <CardList monsters = {this.state.monsters}>
        
      </CardList>
    );
  }
}
export default App;
