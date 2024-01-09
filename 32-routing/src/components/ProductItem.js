import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  console.log(product.name);
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명 : {product.name}</li>
          <li>상세 설명 : {product.body}</li>
        </ul>
      </Link>
    </div>
  );
}

export default ProductItem;
