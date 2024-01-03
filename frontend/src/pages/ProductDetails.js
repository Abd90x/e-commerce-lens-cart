import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import RelatedProducts from "../components/RelatedProducts";

import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  const { addToCart } = useContext(CartContext);

  if (!data) {
    return <div className="container mx-auto">Loading...</div>;
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className=" mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          {/* Image */}
          <div className=" flex-1 lg:max-w-[40%] lg:h-[540px] dark:grad rounded-lg flex justify-center items-center">
            <img
              src={data[0].attributes.image.data.attributes.url}
              alt={data[0].attributes.title}
              className=" w-full max-w-[65%]"
            />
          </div>
          {/* Text */}
          <div className="flex-1 dark:bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center ">
            <div className=" uppercase text-accent text-lg font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.title} Cameras
            </div>
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            <p className="mb-12">{data[0].attributes.description}</p>
            <div className="flex items-center gap-x-8">
              <div className=" text-3xl text-accent font-semibold">
                ${data[0].attributes.price}
              </div>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div></div>

        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
