import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import {getDoc, doc} from 'firebase/firestore';
import {db} from '../firebase'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams(); 

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
      .then(response =>{
        const data = response.data()
        const productosAdapted= {id: response.id, ...data}
        setProduct(productosAdapted)
      })
      .catch(error =>{
        console.log('error');
      })
      .finally(() =>{
        setLoading(false)
      })},[itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
