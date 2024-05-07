const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", fundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", fundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian", fundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zukenberg", fundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", fundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", fundedOn: 1976 },
];

//adicionar 10% de valor de mercado a todas a companias -> MAP
const add10Percent = (company) => {
  company.marketValue = company.marketValue + company.marketValue * 0.1;

  return company;
};

//filtar somente companias fundadas abaixo de 1990 -> FILTER
const filterCompany = (company) => company.fundedOn < 1990;

//somar o valor de mercado das restantes -> REDUCE
const sumValueMarket = (acumulador, company) =>
  acumulador + company.marketValue;

const marketValueOldCompanies = companies
  .map(add10Percent)
  .filter(filterCompany)
  .reduce(sumValueMarket, 0);

console.log(
  `O valor de mercado das empresas somados é de R$ ${marketValueOldCompanies.toFixed(
    2
  )}`
);

//subtrair 10% de valor de mercado a todas a companias -> MAP
const sub10Percent = (company) => {
  company.marketValue = company.marketValue - company.marketValue * 0.1;

  return company;
};

//filtar somente companias fundadas depois de 1980 -> FILTER
const filterCompany1 = (company) => company.fundedOn < 1980;

//somar o valor de mercado das restantes -> REDUCE
const sumValueMarket1 = (acumulador, company) =>
  acumulador + company.marketValue;

const marketValueOldCompanies1 = companies
  .map(sub10Percent)
  .filter(filterCompany1)
  .reduce(sumValueMarket1, 0);

console.log(
  `O valor de mercado das empresas somados é de R$ ${marketValueOldCompanies1.toFixed(
    2
  )}`
);
