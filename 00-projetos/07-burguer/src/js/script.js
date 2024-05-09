const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilterAll = document.querySelector(".filter-all");

//formatar estilo de moeda
function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return newValue;
}

function showAll(productsArray) {
  let myLi = ""; //resetar

  productsArray.forEach((product) => {
    myLi += `
    <li>
      <img src=${product.src} />
      <p>${product.name}</p>
      <p class="item-price">${formatCurrency(product.price)}</p>
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

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
  <li>
    <p>A soma dos valores dos itens é de ${formatCurrency(totalValue)}</p>
  </li>
  
  `;
}

function filterAllItems() {
  const filterJustVegan = menuOptions.filter(
    (product) => product.vegan === true
  );

  showAll(filterJustVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
buttonSumAll.addEventListener("click", sumAllItems);
buttonFilterAll.addEventListener("click", filterAllItems);
