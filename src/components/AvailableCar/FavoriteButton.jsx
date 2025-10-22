import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const FavoriteButton = ({ car }) => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);

  //  checcck car if already in favorite
  useEffect(() => {
    if (!userEmail) return;
    fetch(
      `https://assignment-11-server-chi-gray.vercel.app/favorites?email=${userEmail}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const fav = data.find((f) => f.carId === car._id);
          if (fav) {
            setIsFavorite(true);
            setFavoriteId(fav._id);
          } else {
            setIsFavorite(false);
            setFavoriteId(null);
          }
        } else {
          console.log("Not an array", data);
          setIsFavorite(false);
        }
      });
  }, [userEmail, car._id, user?.token]);

  const handleFavorite = () => {
    if (!userEmail) {
      toast("Please login to add favorite");
      return;
    }

    if (isFavorite) {
      // remove
      fetch(
        `https://assignment-11-server-chi-gray.vercel.app/favorites/${favoriteId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      )
        .then((res) => {
          setIsFavorite(false);
          //   setFavoriteId(null);
        })
        .catch((error) => console.log(error));
    } else {
      if (!car._id) return;
      fetch(`https://assignment-11-server-chi-gray.vercel.app/favorites`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        credentials: "include",

        body: JSON.stringify({ car, carId: car._id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsFavorite(true);
          setFavoriteId(data.insertedId);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {" "}
      <button onClick={handleFavorite} className="absolute top-2 right-2">
        {isFavorite ? (
          <FaHeart
            className="text-red-500 text-2xl cursor-pointer"
            color="red"
          />
        ) : (
          <FaRegHeart
            className="text-gray-500 text-2xl cursor-pointer"
            color="red"
          />
        )}
      </button>
    </div>
  );
};

export default FavoriteButton;
