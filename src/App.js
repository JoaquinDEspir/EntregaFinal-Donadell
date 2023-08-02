import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greet = "hola"
      />
      <Footer />
    </>
  );
}

export default App;

