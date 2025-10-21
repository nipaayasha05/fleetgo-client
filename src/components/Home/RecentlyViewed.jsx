// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// const RecentlyViewed = () => {
//   const [recent, setRecent] = useState([]);
//   const navigate = useNavigate();
//   console.log(recent);

//   useEffect(() => {
//     const viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
//     setRecent(viewed);
//   }, []);

//   if (recent.length === 0) return null;
//   return (
//     <div className="pb-5 ">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
//         {recent.map((car) => (
//           <div key={car.id} className="card-body m-5 p-3 rounded-lg shadow">
//             <img src={car.image} alt="" className="h-[240px]   w-full" />
//             <h4 className="font-bold card-title">{car.model}</h4>
//             <p className="text-lg">
//               <strong>Price : </strong>
//               {car.price}$
//             </p>
//             <div className="card-actions justify-end pr-6 pb-2">
//               <button
//                 onClick={() => navigate(`/car-details/${car.id}`)}
//                 className="btn  text-black  bg-gradient-to-r from-amber-300  to-amber-500 my-2 border-none rounded-3xl  px-5 "
//               >
//                 View Car
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentlyViewed;
