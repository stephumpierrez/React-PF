import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        const productFind = respuesta.find( (productRes) => productRes.id === idProduct);
        setProduct(productFind);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizo la promesa");
      });
  }, []);

  return (
    <ItemDetail product={product}/>
  );
};

export default ItemDetailContainer;