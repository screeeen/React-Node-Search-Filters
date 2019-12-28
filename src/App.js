import React from 'react';
import Header from './components/Header'
import AppCanvas from './components/AppCanvas'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/Style.css'

function App() {
  return (
    <div>
      <Header />
      <AppCanvas />
    </div>
  );
}

export default App;
