const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");

function showAll(productsArray) {
  let myLi = ""; //resetar

  productsArray.forEach((product) => {
    myLi += `
    <li>
      <img src=${product.src} />
      <p>${product.name}</p>
      <p class="item-price">R$ ${product.price}</p>
    </li>
    
    `;
  });

  list.innerHTML = myLi;
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    //spread operator - pega todos os itens do objeto
    ...product,
    price: product.price * 0.9, //dar 10% de desconto
  }));

  showAll(newPrices);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
