import React, { Component } from 'react';
import Menu from './components/layout/Menu';

import { Header, Container } from "semantic-ui-react";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <span>&nbsp;</span>
      <div className="App">
     
        <Header>Kształcenie Tłumaczy Przysięgłych Języka Angielskiego: Terminologia i tłumaczenia prawnicze</Header>
        <Menu />
      </div>
      </Container>
    );
  }
}

export default App;
