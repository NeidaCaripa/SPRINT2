import { getData } from "./services/api.js";

async function getMyData() {
  const myData = await getData();
  console.log(myData);
}
getMyData();
