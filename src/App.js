
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./Footer";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./firebase"
import { CartContextProvider } from './context/CartContext';
import Cart from "./components/Cart"
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>  
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome!" />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Welcome!" />}
        />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path='/checkout' element= {<Checkout/>}/>
        <Route path='/cart' element= {<Cart/>}/>
      </Routes>
      <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
