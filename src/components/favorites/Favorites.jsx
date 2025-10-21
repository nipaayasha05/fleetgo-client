import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Favorite from "./Favorite";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Favorites updated:", favorites);
  }, [favorites]);
  useEffect(() => {
    document.title = "FleetGo | my-favorites";
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      //   if (!user || !user?.token) return;

      try {
        console.log("Fetching favorites for:", user?.email);

        const res = await fetch(
          `http://localhost:3000/favorites?email=${user?.email}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        console.log("Response status:", res.status);

        if (!res.ok) {
          throw new Error("Failed to fetch favorites");
        }

        const data = await res.json();
        console.log("Fetched data:", data);
        setFavorites(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user]);

  const handleRemove = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav._id !== id));
  };

  if (!user) {
    toast("Please login to see your favorites");
  }

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-black font-semibold text-xl">Loading favorites...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-amber-500 font-bold text-center mt-5 py-5">
        My Favorites
      </h3>

      <div className="m-5 grid md:grid-cols-2 lg:grid-cols-4 gap-7 py-">
        {favorites.map((favorite) => (
          <Favorite
            key={favorite._id}
            favorite={favorite}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
