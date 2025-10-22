import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const [loadingName, setLoadingName] = useState(false);
  const [loadingPhoto, setLoadingPhoto] = useState(false);

  useEffect(() => {
    document.title = "FleetGo | Profile";
  }, []);

  // Update Name only
  const handleNameUpdate = async (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value.trim();
    if (!fullname) {
      toast.error("Name cannot be empty!");
      return;
    }

    setLoadingName(true);
    try {
      await updateUser({ displayName: fullname });
      setUser({ ...user, displayName: fullname });
      toast.success("Name updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update name");
    }
    setLoadingName(false);
  };

  // Update Photo only
  const handlePhotoUpdate = async (e) => {
    e.preventDefault();
    const photo = e.target.photo.value.trim();
    if (!photo) {
      toast.error("Photo URL cannot be empty!");
      return;
    }

    setLoadingPhoto(true);
    try {
      await updateUser({ photoURL: photo });
      setUser({ ...user, photoURL: photo });
      toast.success("Photo updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update photo");
    }
    setLoadingPhoto(false);
  };

  return (
    <div className="py-10 ">
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200   ">
        {/* Profile Image */}
        <div className="flex justify-center mb-2">
          <img
            className="w-32 h-32 rounded-full border-2 border-orange-200 p-2 object-cover"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div>

        {/* User Info */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-gray-600">{user?.email || "No Email"}</p>
        </div>

        {/* Update Name Form */}
        <form className="space-y-4 mb-6" onSubmit={handleNameUpdate}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="fullname"
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
              placeholder="Enter your name"
            />
          </div>
          <button
            type="submit"
            disabled={loadingName}
            className={`w-full py-2 mt-2 rounded-lg text-white font-semibold ${
              loadingName
                ? "bg-amber-400 cursor-not-allowed"
                : "btn w-full bg-gradient-to-r from-amber-300 to-amber-500 !text-black my-2 border-none rounded-3xl"
            }`}
          >
            {loadingName ? "Updating Name..." : "Update Name"}
          </button>
        </form>

        {/* Update Photo Form */}
        <form className="space-y-4" onSubmit={handlePhotoUpdate}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={user?.photoURL}
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
              placeholder="Enter photo URL"
            />
          </div>
          <button
            type="submit"
            disabled={loadingPhoto}
            className={`w-full py-2 mt-2 rounded-lg text-white font-semibold ${
              loadingPhoto
                ? "bg-amber-400 cursor-not-allowed"
                : "btn w-full bg-gradient-to-r from-amber-300 to-amber-500 !text-black my-2 border-none rounded-3xl"
            }`}
          >
            {loadingPhoto ? "Updating Photo..." : "Update Photo"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
