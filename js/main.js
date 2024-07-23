import { showAndHideNavbar,handleNavbar, activeNavbar } from "./header.js";
const pagesName = [
    "home.html",
    "about.html",
    "services.html",
    "portfolio.html",
    "contact.html"
]

showAndHideNavbar();
activeNavbar(pagesName.indexOf(window.location.pathname.slice(1)));
handleNavbar();

