const NAME = "Freelancer Forum";
const main = () => {
  const title = document.querySelector("#title");
  const h1 = document.createElement("h1");
  h1.innerHTML = NAME;

  title.appendChild(h1);
};

const totalAverage = () => {
  const average = document.querySelector("#average");
  const h2 = document.createElement("h2");
  h2.id = "averagePrice";
  average.appendChild(h2);
  updateAveragePrice();
};

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];
const freelancers2 = [
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
const maxFreelancers = 8;
let currentHireIndex = 0;
const addHireIntervalId = setInterval(addHire, 5000);

render();
main();
totalAverage();

function render() {
  const hires = document.querySelector("#hires");
  const hiresElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = `${freelancer.name} (${freelancer.occupation}) - $${freelancer.price}`;
    return element;
  });
  hires.replaceChildren(...hiresElements);
}

function addHire() {
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addHireIntervalId);
    return;
  }
  const newHire = freelancers2[currentHireIndex];
  freelancers.push(newHire);
  currentHireIndex++;

  render();
  updateAveragePrice();
}

function initialAveragePrice() {
  const totalPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return totalPrice / freelancers.length;
}

function updateAveragePrice() {
  const averagePrice = initialAveragePrice();
  const averageElement = document.querySelector("#averagePrice");
  averageElement.textContent = `The average price of Freelancers is $${averagePrice.toFixed(
    2
  )}`;
}
