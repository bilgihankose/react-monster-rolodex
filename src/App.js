import React from "react";
import CardList from "./components/CardList/CardList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster"
          onChange={(event) => {
            this.setState({ searchField: event.target.value }); // this.setState({ searchField: event.target.value }, () =>
            // console.log(this.state) // if we wanted to see or do something with our state right after we said it, then we have to do it inside of this second argument function that will get called right after such state.
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default App;
