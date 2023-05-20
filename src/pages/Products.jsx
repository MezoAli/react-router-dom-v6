import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, title: "product-1" },
  { id: 2, title: "product-2" },
  { id: 3, title: "product-3" },
];
function Products() {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;
