import axios from "axios";

export const createNewPotluck = async (potluck) => {
  console.log(potluck);
  const response = await axios({
    method: "POST",
    url: `/potluck`,
  });
  const newDBPotluck = await response.data;
  return newDBPotluck;
};

export const getexistingPotluck = async (potluckId) => {
  const response = await axios({
    method: "get",
    url: `/potluck/${potluckId}`,
  });
  const potluck = await response.data;
  console.log("Potluck at API:", potluck);
  return potluck;
};

export const updateExistingPotluck = async (potluck) => {
  const response = await axios.put(`/potluck/`, potluck);
  const updatedPotluck = await response.data;
  return updatedPotluck;
};
