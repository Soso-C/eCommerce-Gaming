import React, { useEffect, useState } from "react";
import ProductsList from "../components/products/productsList/ProductsList";
import { useParams } from "react-router-dom";
import { getArticles } from "../api/article";
import NotFound from "./NotFound";

export default function Products() {
  const [articles, setArticles] = useState([]);
  // const [option, setOption] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    getArticles()
      .then((res) =>
        setArticles(res.products.filter((product) => product.category === slug))
      )
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <>
      {articles.length > 0 ? (
        <ProductsList articles={articles} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
