import {Component} from 'react';
import { getImages } from '../services/ApiService';
import  SearchBar  from './SearchBar'
import {Container} from './App.styled'

export class App extends Component {

  render() {
    return (
      <Container>
        <SearchBar />
        <button type="button" onClick={() => getImages()}></button>
      </Container>
    );
  }
 
};
