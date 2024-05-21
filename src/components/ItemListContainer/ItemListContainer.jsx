import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";

import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((respuesta) => {
        if (idCategory) {
          const productsFilter = respuesta.filter((productRes) => productRes.category === idCategory);
          setProducts(productsFilter);
        } else {
          setProducts(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategory]);

  return (
    <div>
      <p>{saludo}</p>
      {
        loading ? <div>Espera un momento...</div> : <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;