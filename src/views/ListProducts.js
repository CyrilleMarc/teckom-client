import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getProducts")
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <div>
      {products.length > 0 &&
        products.map((product) => <Product {...product} />)}
    </div>
  );
}

export default ListProducts;
