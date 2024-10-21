import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayContact } from "./contact.js";
import "./style.css";

// Initial page load
displayHome();

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  document.querySelector("#content").innerHTML = "";

  switch (e.target.id) {
    case "home":
      displayHome();
      break;
    case "menu":
      displayMenu();
      break;
    case "contact":
      displayContact();
      break;
  }
});
