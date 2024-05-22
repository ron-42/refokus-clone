import { motion } from "framer-motion";
import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <motion.div className="w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <motion.span className="text-md font-regular ">{title}</motion.span>
      <IoIosReturnRight className="text-sm font-semibold" />
    </motion.div>
  );
}

export default Button;
