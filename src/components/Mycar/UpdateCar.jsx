// import React, { useEffect, useState } from "react";
// import Update from "./Update";

// const UpdateCar = () => {
//   const [updated, setUpdated] = useState([]);
//   const { _id } = updated();
//   useEffect(() => {
//     fetch(`http://localhost:3000/cars/${_id}`)
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }, [_id]);
//   return (
//     <div>
//       {updated.map((update) => (
//         <Update update={update} key={update._id}></Update>
//       ))}
//     </div>
//   );
// };

// export default UpdateCar;
