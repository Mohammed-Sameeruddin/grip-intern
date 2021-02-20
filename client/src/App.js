import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Container } from '@material-ui/core';
const App = () => {
  return (
    <>
      <Container fixed>
        <Header />
        <Home />
        <Footer />
      </Container>
    </>
  );
}

export default App;
