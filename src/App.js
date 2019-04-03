import React, { Component } from 'react';
import Menu from './components/layout/Menu';
import { Divider, Header, Segment, Container } from "semantic-ui-react";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <span>&nbsp;</span>
      <div className="App">
     
        <Header>Kształcenie Tłumaczy Przysięgłych Języka Angielskiego - zaliczenie</Header>
        <Menu />
      </div>
      </Container>
    );
  }
}

export default App;
