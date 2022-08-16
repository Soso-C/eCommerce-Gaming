import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/productDetails/ProductDetails";
import { getArticleById } from "../api/article";

export default function Article() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const url = `http://localhost:3001/api/articles/${id}`;
  useEffect(() => {
    getArticleById(url)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.log(err));
  }, [id, url]);

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
