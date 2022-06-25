import React from "react";

export default function NewOrBestProducts({ newOrBest }) {
  return (
    <div className="max-w-7xl mx-auto pb-10 px-4">
      <span className="text-2xl text-zinc-800 font-medium text-center block pt-8">
        {newOrBest === "new" ? "Nouveautés" : "Meilleures ventes"}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 lg:pt-16">
        <div className="bg-white h-[350px] w-full">
          <div>
            <img src={""} alt="" />
          </div>
        </div>
        <div className="bg-white h-[350px] w-full">
          <div>
            <img src={""} alt="" />
          </div>
        </div>
        <div className="bg-white h-[350px] w-full">
          <div>
            <img src={""} alt="" />
          </div>
        </div>
        <div className="bg-white h-[350px] w-full">
          <div>
            <img src={""} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
