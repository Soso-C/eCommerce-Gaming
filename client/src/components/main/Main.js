import React from "react";
import CategoryBanner from "./categorybanner/CategoryBanner";
import NewOrBestProducts from "./newproducts/NewOrBestProducts";
import TopMainBanner from "./topmainbanner/TopMainBanner";

export default function Main() {
  return (
    <main className="">
      <TopMainBanner />
      <CategoryBanner />
      <NewOrBestProducts newOrBest="new" />
      <NewOrBestProducts />
    </main>
  );
}
