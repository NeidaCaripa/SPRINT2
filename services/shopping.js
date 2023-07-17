const shoppingButton = document.querySelector(".shopping-cart");
const shoppingModal = document.querySelector(".modal_shopping");
shoppingButton.addEventListener("click", () => {
  if (shoppingModal.style.display === "block") {
    shoppingModal.style.display = "none";
  } else {
    shoppingModal.style.display = "block";
  }
});
const URL = "http://localhost:3000";

export async function getProducts() {
  const response = await fetch(`${URL}/shopping`);
  const data = await response.json();
  return data;
}

