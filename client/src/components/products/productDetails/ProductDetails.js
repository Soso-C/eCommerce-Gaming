import React from "react";

export default function ProductDetails({ product }) {
  console.log(product);
  return (
    <section>
      <div className="relative max-w-7xl px-4 lg:pt-32 mx-auto h-full py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 justify-items-center items-center mt-12 bg-white p-6 rounded shadow-sm shadow-gray-300">
          <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
            <img
              alt=""
              className="object-cover h-full w-full overflow-hidden"
              src={product.image}
            />
          </div>
          <div className="w-full h-full">
            <span>{product.countStock} en stock</span>
            <div className="flex justify-between mt-8">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-lg font-bold">{product.price}€</p>
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
                  className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
