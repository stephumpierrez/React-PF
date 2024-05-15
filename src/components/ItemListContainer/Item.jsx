import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <Link to={`/detail/${product.id}`}>
            <img className="image-item" src={product.image} />
            <p>{product.name}</p>
            <p>$ {product.price}</p>
        </Link>
    );
};

export default Item;