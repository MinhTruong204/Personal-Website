const toggleBtn = document.querySelector(".header_navbar_toggle");
const menu = document.querySelector(".header_navbar_menu_list");
let statusMenu = 0;
const navbarElements = document.querySelectorAll(".header_navbar_menu_item");

let showAndHideNavbar = () => {
    toggleBtn.addEventListener("click",() => {
        console.log(menu)
        if(statusMenu == 0) {
            menu.style.display = "flex";
            statusMenu = 1 ;
        }
        else {
            menu.style.display = "none";
            statusMenu = 0 ;
        }
    });
}

let activeNavbar = (index) => {
    navbarElements.forEach((e,i) => {
        if(index == i) navbarElements.item(index).style.color = "var(--mainColor_2)";
        else navbarElements.item(i).style.color = "";
    })
}

let handleNavbar = () => {
    navbarElements.forEach((e,index) => {
        e.addEventListener("click" , () => {
            activeNavbar(index);
        })
    })
}



export {showAndHideNavbar,handleNavbar,activeNavbar}