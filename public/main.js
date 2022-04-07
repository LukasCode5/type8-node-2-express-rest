"use strict";
console.log("main");
const BASE_URL = "http://localhost:3000/api/colors";

const btn = document.getElementById("colors");

btn.onclick = getColors;

async function getColors() {
  const response = await fetch(BASE_URL);
  console.log(response);
  const data = await response.json();
  console.log("data ===", data);
  // response ok
  if (data.success) {
    data.colors.forEach((color) => console.log(color));
  } else {
    // error
    alert(data.error);
  }
}
