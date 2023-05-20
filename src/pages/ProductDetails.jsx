import { Link, useParams } from "react-router-dom";
function ProductDetails() {
  const { productId } = useParams();
  return (
    <>
      <h1>ProductDetails</h1>
      <p>Product Id : {productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}

export default ProductDetails;
