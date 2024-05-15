const ItemDetail = ({ product }) => {
  return (
    <div>
      <h1>ItemDetailContainer</h1>
      <img src={product.image} />
      <div>
        <p>{product.name}</p>
        <p>$ {product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;