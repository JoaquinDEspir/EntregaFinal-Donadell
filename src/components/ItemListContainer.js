
import React, { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router";
import {db} from "../firebase"
import {getDocs, collection, query,   where} from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId
      ?query(collection(db, 'productos'), where('category', '==', categoryId))
      :collection(db, 'productos')
      getDocs(collectionRef)
        .then (response =>{
          const productosAdapted = response.docs.map(doc =>{
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setProducts(productosAdapted)
        })
        .finally(()=>{
          setLoading(false)
        })
  }, [categoryId]);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
