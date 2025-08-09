import React from "react";
import { AnimatePresence, motion } from "motion/react";

const web = ({ web }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.3 },
    }),
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="visible"
      className="card sm:card-xs card-xl m-3     p-2 shadow-xl bg-amber-50"
    >
      <div className=" m-1        rounded-xl border-l-yellow-100  ">
        <div className="flex flex-col sm:flex-row sm:gap-0 gap-5 items-center  ">
          <figure className="px-10 pt-10 ">
            <motion.img
              animate={{ x: [10, 7, 10] }}
              transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
              src={web.icon}
              className="w-1/2 sm:w-36 h-1/2 sm:h-28 rounded-xl p-1 bg-amber-300"
            />
          </figure>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="card-title text-black sm:text-xl font-bold"
          >
            {web.title}
          </motion.h2>
        </div>

        <div className="card-body h-1/12 items-center text-center">
          <p className="sm:text-xl text-gray-700">{web.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default web;
