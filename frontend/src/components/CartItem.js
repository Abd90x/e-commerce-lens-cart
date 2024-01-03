import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { IoTrash } from "react-icons/io5";

import Qty from "../components/Qty";

import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className=" flex gap-x-8">
      <Link to={`product/${item.id}`} className=" w-[70px] h-[70px]">
        <img
          src={item.attributes.image.data.attributes.url}
          alt={item.attributes.title}
        />
      </Link>
      <div className="flex-1">
        {/* Title and remove icon */}
        <div className=" flex gap-x-4 mb-3 ">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
          >
            <IoTrash />
          </div>
        </div>
        <div className=" flex items-center gap-x-12">
          {/* Quantity */}
          <div className="flex gap-x-4 mb-2">
            <div>
              <Qty item={item} />
            </div>

            {/* Price */}
          </div>
          <div className="text-accent text-xl">
            $ {(item.attributes.price * item.amount).toFixed(2)}
          </div>
        </div>
        <div>
          <span className="text-accent">
            ${item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
