import React from "react";
import "./SearchBox.css";

const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search monster"
      onChange={handleChange} // this.setState({ searchField: event.target.value }, () =>
        // console.log(this.state) // if we wanted to see or do something with our state right after we said it, then we have to do it inside of this second argument function that will get called right after such state.
    />
  );
};

export default SearchBox;
