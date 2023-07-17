import { getProducts } from "../services/api.js";

const imgPrincipal = document.querySelector(".ImgPrincipal");
const url = window.location.search;
const productId = new URLSearchParams(url).get("id");
const shoeName = document.querySelector(".shoe-name");
const originalPrice = document.querySelector(".Precio2");
const salePrice = document.querySelector(".Precio");

const allProducts = await getProducts();
const currentIndex = productId - 1;
const currentProduct = allProducts[currentIndex];
//Almacena las imagenes de las miniaturas
const minImages = document.querySelectorAll(".miniaturas img");
const modalMiniImages = document.querySelectorAll(".modal_miniaturas div img");

function formatPrice(price) {
  const fixedPrice = new Intl.NumberFormat("de-DE").format(price);
  return fixedPrice;
}

//Modal de las imagenes
const modal = document.getElementById("myModal");
const closeIcon = document.getElementsByClassName("close")[0];
const mainImage = document.querySelector("#modal_img__main");
const miniImage1 = document.getElementById("modalMini1");
const miniImage2 = document.getElementById("modalMini2");
const miniImage3 = document.getElementById("modalMini3");
const miniImage4 = document.getElementById("modalMini4");

// Abrir modal
function mostrarModal(imageRoute) {
  modal.style.display = "block";
  mainImage.src = imageRoute;
}
function changeImage(imageSrc) {
  imgPrincipal.src = imageSrc;
  mainImage.src = imageSrc;
}

imgPrincipal.addEventListener("click", (el) => {
  mostrarModal(el.target.src);
  miniImage1.src = currentProduct.imagen1;
  miniImage2.src = currentProduct.imagen2;
  miniImage3.src = currentProduct.imagen3;
  miniImage4.src = currentProduct.imagen4;
});
minImages.forEach(function (miniatura) {
  miniatura.addEventListener("click", function () {
    const clickedMiniatura = this;
    changeImage(clickedMiniatura.src);
    minImages.forEach(function (miniatura) {
      miniatura.classList.remove("miniActive");
    });
    clickedMiniatura.classList.add("miniActive");
  });
});
modalMiniImages.forEach(function (miniatura) {
  miniatura.addEventListener("click", function () {
    const clickedMiniatura = this;
    changeImage(clickedMiniatura.src);
    modalMiniImages.forEach(function (miniatura) {
      miniatura.classList.remove("miniActive");
    });
    clickedMiniatura.classList.add("miniActive");
  });
});

// Cerrar modal
closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
});

async function getDetailData(index, products) {
  const currentProduct = products[index];
  imgPrincipal.src = currentProduct.imagen0;
  minImages.forEach((element, index) => {
    element.src = currentProduct[`imagen${index}`];
  });

  shoeName.textContent = currentProduct.nombre;
  originalPrice.textContent = formatPrice(currentProduct.precio) + ".00 COP";
  salePrice.innerHTML = `${formatPrice(
    currentProduct.precio / 2
  )}.00 COP <strong>50%</strong>`;
}

// Sumar y restar
const contador = document.getElementById("contador");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");

btnSumar.addEventListener("click", function () {
  let valor = parseInt(contador.innerText);
  valor++;
  contador.innerText = valor;
});

btnRestar.addEventListener("click", function () {
  let valor = parseInt(contador.innerText);
  valor--;
  contador.innerText = valor;
});

getDetailData(currentIndex, allProducts);