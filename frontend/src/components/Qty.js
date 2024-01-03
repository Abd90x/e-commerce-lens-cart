import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleInput } = useContext(CartContext);

  return (
    <div className="flex gap-x-6 items-center text-primary ">
      <input
        onChange={(e) => handleInput(e, item.id)}
        className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent"
        type="number"
        min={1}
        step={1}
        pattern="[0-9]"
        placeholder={`${item.amount}`}
        value={item.amount}
      />
    </div>
  );
};

export default Qty;
