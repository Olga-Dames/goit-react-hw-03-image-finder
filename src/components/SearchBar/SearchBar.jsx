import React, { Component } from 'react';
import {Header} from './SearchBar.styled';
import {Form} from './SearchBar.styled';
import {Input} from './SearchBar.styled';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = (e) => {
    this.setState({searchQuery: e.target.value})
  }

handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state)
  // this.resetQuery();
}

resetQuery = () => {
  this.setState({searchQuery: ''})
}

  render() {
    return (
      <Header>
        <Form>
          <button type="submit" onSubmit={this.handleSubmit}>
            <span className="button-label">Search</span>
          </button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </Form>
      </Header>
    );
  }
}
