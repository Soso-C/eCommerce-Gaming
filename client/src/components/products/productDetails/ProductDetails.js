import React, { useEffect } from "react";

export default function ProductDetails({ product }) {
  // Permet de target le haut de la page lorsque'on arrive sur la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="relative max-w-7xl px-4 pt-20 md:pt-32 mx-auto h-full py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 justify-items-center items-center mt-12 bg-white p-6 rounded shadow-sm shadow-gray-300">
          <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
            <img
              alt=""
              className="object-cover h-full w-full overflow-hidden md:w-2/3 lg:w-full"
              // a remplacer uniquement par imageDetails
              src={product?.imageDetails || product?.image}
            />
          </div>
          <div className="w-full h-full">
            {product?.countStock > 0 ? (
              <strong className=" bg-green-500 font-medium uppercase px-5 py-1.5 rounded-full text-xs">
                En Stock
              </strong>
            ) : (
              <strong className=" bg-red-500 font-medium uppercase px-5 py-1.5 rounded-full text-xs">
                Hors Stock
              </strong>
            )}

            <div className="flex flex-col md:flex-row justify-between mt-8">
              <h1 className="text-xl font-bold truncate">{product?.name}</h1>
              <p className="text-lg font-medium text-blue-600 ">
                {product?.price}€
              </p>
            </div>

            <div className="py-2 mt-8 space-y-3 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                veniam dicta beatae eos ex error culpa delectus rem tenetur,
                architecto quam nesciunt, dolor veritatis nisi minus inventore,
                rerum at recusandae? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa
                delectus rem tenetur, architecto quam nesciunt, dolor veritatis
                nisi minus inventore, rerum at recusandae?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nam sapiente nobis ea veritatis error consequatur nisi
                exercitationem iure laudantium culpa, animi temporibus non!
                Maxime et quisquam amet. A, deserunt! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Placeat nam sapiente nobis ea
                veritatis error consequatur nisi exercitationem iure laudantium
                culpa, animi temporibus non! Maxime et quisquam amet. A,
                deserunt!
              </p>
            </div>

            {product?.countStock > 0 ? (
              <form className="mt-8">
                <div className="flex mt-8">
                  <div>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value="1"
                      className="w-12 py-3 text-md text-center rounded bg-gray-300 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className={`block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded-lg hover:bg-green-500`}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
