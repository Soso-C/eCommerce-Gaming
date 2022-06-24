import React from "react";
import CategoryBanner from "./categorybanner/CategoryBanner";
import TopMainBanner from "./topmainbanner/TopMainBanner";

export default function Main() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <TopMainBanner />
      <CategoryBanner />
    </main>
  );
}
