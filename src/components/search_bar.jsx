import React, { Component } from 'react';
const DEFAULT_SEARCH = "Disney";

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
      defaultValue={DEFAULT_SEARCH}
      onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
export { DEFAULT_SEARCH };
