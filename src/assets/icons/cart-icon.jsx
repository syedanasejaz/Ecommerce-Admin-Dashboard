import React from "react";

const CartIcon = () => {
  return (
    <svg
      class="h-8 w-8 text-white"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="9" cy="19" r="2" />{" "}
      <circle cx="17" cy="19" r="2" />{" "}
      <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
    </svg>
  );
};

export default CartIcon;
