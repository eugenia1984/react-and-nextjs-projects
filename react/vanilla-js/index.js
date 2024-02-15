const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useState(), useEffect())",
    "Dynamic rendering"
  ]
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-features");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = "";
  list.innerHTML = listContent; 
  tabContent.append(list);
}

function highlightButton(btn) {
  btnWhyReact.className = "";
  btnCoreFeature.className = "";
  btn.className = "active";
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);

  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else {
    displayContent(content[1]);
  } 
}

displayContent(content[0]); 

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);