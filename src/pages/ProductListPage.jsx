// import { set } from "cypress/types/lodash";
import { useEffect, useState } from "react";
import classes from "../styles/ProductListPage.module.css";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        console.log(data);
      }

    } catch (error) {
      console.log(error);
    }
  }
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className={classes.ProductListPage}>
      <h1>Product Lists</h1>
      <ul>
        {products.map((product) => {
          return (
            <Link to={`/product/details/${product.id}`} key={product.id}>
              <li className={classes.productList} >

                <div className={classes.imageContainer}>
                  <img className={classes.productImage} src={product.image} />
                </div>

                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.description.substring(0, 40)}</p>
                <p>${product.price}</p>

              </li>
            </Link>
          )
        })}
      </ul>
    </div >
  );
}

export default ProductListPage;
