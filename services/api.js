const URL = "http://localhost:3000";

export async function getProducts() {
  const response = await fetch(`${URL}/productos`);
  const data = await response.json();
  return data;
}
