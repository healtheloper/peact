import peact from "./peact.js";
import App from "./app.js";

peact.setRoot(document.querySelector(".App"), App);
peact.render();
