
// ItemListContainer.js
import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "./AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
