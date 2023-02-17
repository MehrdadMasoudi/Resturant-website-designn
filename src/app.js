const tabs = document.querySelectorAll(".tab");
const collapseBtn = document.querySelector("#collapseBtn");
const reciptDiv = document.querySelector("#reciptDiv");
const mainDiv = document.querySelector("#mainMenuDiv");
const menuGrid = document.querySelector("#menuGrid");
const expandBtn = document.querySelector("#expandBtn");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.classList.remove("bg-lightIvory", "text-white");
    tab.classList.add("text-lightIvory");
  });
  // Activate a new tab and panel based on the target
  e.target.classList.add("bg-lightIvory", "text-white");
}

collapseBtn.addEventListener("click", hello);

function hello() {
  reciptDiv.classList.toggle("collapsed");
  reciptDiv.classList.toggle("expanded");
  mainDiv.classList.toggle("maWidth");
  menuGrid.classList.toggle("changingCols");
}
