export const carsPromise = (email) => {
  return fetch(
    `https://assignment-11-server-chi-gray.vercel.app/cars?email=${email}`
  ).then((res) => res.json());
};
