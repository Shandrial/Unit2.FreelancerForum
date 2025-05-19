const Freelancers = [
    {Name: "Alice", Occupation: "Writer", Price: 30 },
    {Name: "Bob", Occupation: "Teacher", Price: 50 },
    {Name: "Carol", Occupation: "Programmer", Price: 70 },
    {Name: "Dave", Occupation: "Designer", Price: 40 },
    {Name: "Eve", Occupation: "Artist", Price: 60 },
];

const newFreelancers = [
    {Name: "Frank", Occupation: "Photographer", Price: 80 },
    {Name: "Grace", Occupation: "Musician", Price: 60 },
    {Name: "Heidi", Occupation: "Chef", Price: 50 },
    {Name: "Ivan", Occupation: "Developer", Price: 90 },
    {Name: "Judy", Occupation: "Marketer", Price: 70 },
    {Name: "Mallory", Occupation: "Consultant", Price: 100 },
    {Name: "Niaj", Occupation: "Analyst", Price: 80 },
];

function init() {
    const maxFreelancers = 15;
  const root = document.querySelector("#root");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Freelancer Forum";
  root.append(h1);

  const h2 = document.createElement("h2");
  h2.innerHTML = "Average Price: $ " + (Freelancers.reduce((acc, Freelancer) => acc + Freelancer.Price, 0) / Freelancers.length).toFixed(2);
  root.append(h2);

  


  const FreelancerTable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  for (let key of Object.keys(Freelancers[0])) {
    const th = document.createElement("th");
    th.innerText = key;

    thead.appendChild(th);
  }

  FreelancerTable.appendChild(thead);
  FreelancerTable.appendChild(tbody);
  
  root.appendChild(FreelancerTable);

  renderFreelancers();
}


function renderFreelancers() {
  const FreelancersTable = document.querySelector("tbody");

  const FreelancerElements = Freelancers.map((Freelancer) => {
    const row = document.createElement("tr");

    const f_name = document.createElement("td");
    f_name.innerHTML = Freelancer.Name;

    const f_Occupation = document.createElement("td");
    f_Occupation.innerHTML = Freelancer.Occupation;

    const f_Price = document.createElement("td");
    f_Price.innerHTML = `$ ${Freelancer.Price} `;

    

    row.appendChild(f_name);
    row.appendChild(f_Occupation);
    row.appendChild(f_Price);
    

    return row;
  });

  FreelancersTable.replaceChildren(...FreelancerElements);
}

const addFreelancer = () => {
  const newFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];



  Freelancers.push(newFreelancer);

  renderFreelancers();
};

const addFreelancerInterval = setInterval (() => {
    addFreelancer();
    renderFreelancers();

    if (Freelancers.length >= 15) {
        clearInterval(addFreelancerInterval);
    }
}, 3000);





init();
