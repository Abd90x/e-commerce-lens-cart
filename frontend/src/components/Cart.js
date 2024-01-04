import React, { useContext, useRef } from "react";
import {
  IoArrowForward,
  IoCartOutline,
  IoClose,
  IoTrash,
} from "react-icons/io5";
import { CartContext } from "../context/CartContext";

import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

import useClickOutside from "../hooks/useClickOutside";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51OUFBYEhAkmSEMiJQ34mW8vcUAoOpPfISVEFvfkpRHCsxN6CjVYgX9QGBYZ0kGm6inyfXyCny1waJeaZeZUeW44W00ebfNzNiH"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const wrapperRef = useRef("menu");

  useClickOutside(wrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="w-full h-full px-4 dark:text-white" ref={wrapperRef}>
      <div className=" overflow-y-auto overflow-x-hidden h-[70vh]">
        <div
          onClick={() => setIsOpen(false)}
          className=" text-4xl w-20 h-[98px] flex justify-center items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* Subtotal & total */}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>${parseFloat(total).toFixed(2)}</div>
          </div>
          <div className="flex justify-between text-lg">
            <div>Shipping</div>
            <div>$4.99</div>
          </div>
          <div className="flex justify-between text-lg">
            <div>Tax</div>
            <div>2%</div>
          </div>
          <hr className=" border-black dark:border-white" />
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>${parseFloat(total + 4.99 + total * 0.02).toFixed(2)}</div>
          </div>
        </div>
      )}

      <div className=" px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={() => clearCart()}
              className="btn btn-accent hover:bg-accent-hover text-primary"
            >
              Clear Cart
              <IoTrash className="text-lg ml-2 mb-[0.75px]" />
            </button>
            <button
              onClick={handlePayment}
              className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2"
            >
              Checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className=" h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col dark:text-white/30">
            <div className="text-2xl">Your Cart is Empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
