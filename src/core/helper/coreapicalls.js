import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then((response) => {
      let resp = response.json();
      const result = resp
        .then((result) => {
          return result;
        })
        .catch((err) => {
          console.log("error", err);
        });
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProducts;
