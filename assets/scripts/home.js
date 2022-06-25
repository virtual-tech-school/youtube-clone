let menu = document.getElementById('menu');

let sideBar = document.querySelector(".sidebar");

let catagoryBar = document.querySelector(".catagory");

menu.onclick = function () {

    catagoryBar.classList.toggle("large-catagory-bar");
    sideBar.classList.toggle("small-sidebar");

}