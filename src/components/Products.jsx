import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Arquitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} index={index} />
      ))}
      <div className="absolute w-full h-full top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute window w-[30rem] h-[23rem] bg-white left-[42%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              height={"23rem"}
              src="public\videos\arqitel.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              height={"23rem"}
              preload="auto"
              src="public\videos\ttr.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              height={"23rem"}
              preload="auto"
              src="public\videos\yir.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-600"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              height={"23rem"}
              preload="auto"
              src="public\videos\yahoo.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
