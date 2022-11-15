import fetch from "node-fetch";

const URI = "http://localhost:5000";

export const complexSearchGet = async (searchCriteria) => {
  const response = await fetch(`${URI}/complexSearch`, {
    method: "get",
    body: JSON.stringify(searchCriteria),
    headers: { "Content-Type": "application/json" },
  });
  const recipes = await response.text();
  return recipes;
};
