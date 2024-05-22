import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-1/6  px-6 py-5 border-b-[1px] border-t-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center font-satoshi-variable">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
