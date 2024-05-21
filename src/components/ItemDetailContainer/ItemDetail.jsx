const ItemDetail = ({ product }) => {
  return (
    <div className="item">
      <h1>Detalles</h1>
      <img className="image-item" src={product.image} />
      <div>
        <p>{product.name}</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;