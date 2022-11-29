import * as req from "./requests.js";

const mainURL = "http://localhost:3030/";
const moviesURL = `${mainURL}/data/movies`;

export const movies = () => req.get(moviesURL).then((res) => res.json());
