import axios from "axios";

export const complexSearchGet = async (searchCriteria) => {
  console.log(searchCriteria);
  const response = await axios({
    method: "get",
    url: `/recipes/complexSearch?query=${searchCriteria.value}`,
  });
  const recipes = await response.data;
  return recipes;
};
