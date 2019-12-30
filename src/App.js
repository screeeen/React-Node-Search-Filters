import React from 'react';
import Header from './components/Header'
import AppCanvas from './components/AppCanvas'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container className="m-0 p-0">
      <Header />
      <AppCanvas />
    </Container>
  );
}

export default App;
