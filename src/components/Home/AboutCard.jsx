import React from "react";

const AboutCard = ({ ab }) => {
  console.log(ab);
  const { title, description, icon } = ab;
  return (
    <div className="card bg-gradient-to-r from-amber-200    to-amber-400   m-5 shadow-sm">
      <div className=" m-1 border-l-5 border-t-5 border-t-amber-100  rounded-xl border-l-amber-100">
        <figure className="px-10 pt-10 ">
          <img
            src={icon}
            className="w-[200px] h-[200px] rounded-full p-2 bg-amber-200"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
