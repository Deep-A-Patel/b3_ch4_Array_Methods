console.log("😤😰😴🤔   ");

const businessOutput = document.querySelector("#output");
console.log("businessOutput", businessOutput);

let newYorkBusiness = businesses.filter(business => {
  console.log("My Business Is My Business None Of Your Business", business);

  let inNewYork = false;

  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }
  return inNewYork;
});

console.log("newYorkBusiness", newYorkBusiness);
console.log("original array");

businesses
  .filter(biz => biz.addressStateCode === "NY")
  .forEach(business => {
    console.log("My Business Is My Business None Of Your Business", business);
    businessOutput.innerHTML += `
              <h2>${business.companyName}
              <address>${business.addressStateCode}</address>
              <hr>
              `;
  });

function showBusiness(business) {
  return `<div>${business.companyName}</div>`;
}

let newStuff = businesses.map(showBusiness);
businessOutput.innerHTML += newStuff.join("<hr>");

////////////////////////////////////////  CANDIES  ////////////////////////////////////////

const candies = [
  {
    name: "Lollipop",
    price: 2.99
  },
  {
    name: "Tootsie Roll",
    price: 1.49
  },
  {
    name: "Sugar Daddy",
    price: 2.49
  }
];

const firstCheapCandy = candies.find((candy, index) => {
  console.log("candy", index, candy);
  return candy.price < 2.0;
});

console.log("cheap", firstCheapCandy);

//////////////////////

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];

console.log("monthlyRainFall", monthlyRainfall);
const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => {
  console.log("currentTot (parameter) nextValue: number", nextValue);
  return (currentTotal = +nextValue);
});
// const totalRainfall = monthlyRainfall.reduce()

console.log(totalRainfall);

//////////////////////////////////// Practice: Big Spenders ////////////////////////////////////

businesses
  //filter through each business in the businesses array
  .filter(business => {
    const bigOrder = business.orders.find(order => order > 9000);
    if (bigOrder === undefined) {
      return false;
    }
    return true;
  })
  .forEach(business => {
    console.log("whats the business", business);
    businessOutput.innerHTML += `
    <h2>"Hey Big Spender "${business.companyName}</h2>
    <hr>`;
  });

//////////////////////////////// Practice: Solar System ////////////////////////////////

const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];
const planetEl = document.getElementById("planets");

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(function(planet) {
  console.log(planet);
  planetEl.innerHTML += `
    <h2>${planet}</h2>
    `;
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let upperCasePlanets = planets.map(function(planet) {
  const nameCapital = planet.charAt(0).toUpperCase() + planet.slice(1);
  planetEl.innerHTML += `
    <h2>${nameCapital}</h2>`;
  return nameCapital;
});
console.log(upperCasePlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let planetsWithAnE = planets.filter(function(planet) {
  if (planet.includes("e") === false) {
    return false;
  }
  return true;
});
console.log(planetsWithAnE);
planetEl.innerHTML += planetsWithAnE.join(`<hr>`);
