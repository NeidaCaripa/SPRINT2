const URL = "http://localhost:3000";

export async function getData() {
  const response = await fetch(`${URL}/posts`);
  const data = await response.json();
  return data;
}
