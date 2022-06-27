import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/productDetails/ProductDetails";
import axios from "axios";
export default function Article() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/articles/${id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
