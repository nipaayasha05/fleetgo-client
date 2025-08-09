import React from "react";

const AboutCard = ({ ab }) => {
  const { title, description, icon } = ab;
  return (
    <div className="card sm:card-xs bg-amber-50        m-5 shadow-sm">
      <div className=" m-1 border-l-5 border-t-5 border-t-amber-50  rounded-xl border-l-amber-50">
        <figure className="px-10 pt-10 ">
          <img
            src={icon}
            className="w-1/2 h-1/2 rounded-full border  border-amber-300"
          />
        </figure>
        <div className="card-body h-1/12 items-center text-center">
          <h2 className="card-title text-black sm:text-xl font-bold">
            {title}
          </h2>
          <p className="sm:text-xl text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
