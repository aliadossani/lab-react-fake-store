import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../styles/ProductDetailsPage.module.css"


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
        console.log(productData);
      }

    } catch (error) {
      console.log(error);
    }
  }


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchProduct();
  }, []);


  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      <div className={classes.imageContainer} >
        <img src={product.image} />
      </div>

      <p>{product.title}</p>
      <p className={classes.categoryContainer}>{product.category}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>{product.title}</p>
    </div>
  );
}

export default ProductDetailsPage;
