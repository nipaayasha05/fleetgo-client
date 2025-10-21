import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import FavoriteButton from "../AvailableCar/FavoriteButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Favorite = ({ favorite, handleRemove }) => {
  const [isFavorite, setIsFavorite] = useState(true);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const car = favorite?.car;
  const favoriteId = favorite._id;

  const handleFavorite = () => {
    if (!user) return;
    if (isFavorite) {
      fetch(`http://localhost:3000/favorites/${favoriteId}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((res) => {
          if (res.ok) {
            setIsFavorite(false);
            if (handleRemove) handleRemove(favoriteId);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  console.log("cardata", car);
  return (
    <div>
      <div className="card bg-base-100   shadow-sm">
        <figure>
          <img className="w-full h-[280px]" src={car.photo} />
        </figure>
        <div className="card-body text-black  sm:text-xl bg-amber-50">
          <div className="sm:h-10/12">
            <div className="flex  items-center gap-10  ">
              <h2 className=" sm:text-2xl sm:font-bold card-title line-clamp-1">
                {car.carModel}
              </h2>

              <p className=" text-end text-amber-500 font-semibold">
                {car.availability}
              </p>
            </div>
            <p className="line-clamp-1">{car.description}</p>
            <div className="text-start">
              <p>
                <span className="font-semibold">Brand</span> : {car.brand}{" "}
              </p>

              <p>
                {" "}
                <span className="font-semibold">Price Per Day</span> :{" "}
                {car.dailyRentalPrice} $
              </p>
              <p>
                {" "}
                <span className="font-semibold">Booking Count</span> :{" "}
                {car.bookingCount}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Location</span> : {car.location}{" "}
              </p>
              <p>
                {" "}
                <span className="font-semibold">Added On</span> : {car.date}{" "}
              </p>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/car-details/${favorite.car._id}`)}
              className="btn w-full  bg-gradient-to-r from-amber-300 text-black  to-amber-500 my-2 border-none rounded-3xl   "
            >
              Book Now
            </button>
          </div>
        </div>
        {/* favorite button */}
        <div>
          <button onClick={handleFavorite} className="absolute top-2 right-2">
            {isFavorite ? (
              <FaHeart className="text-red-500 text-2xl cursor-pointer" />
            ) : (
              <FaRegHeart
                className="text-gray-500 text-2xl cursor-pointer"
                color="red"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
