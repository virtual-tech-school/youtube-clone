var menu = document.getElementById('menu');

var sideBar = document.querySelector(".sidebar");

var catagoryBar = document.querySelector(".catagory");

menu.onclick = function () {

    catagoryBar.classList.toggle("large-catagory-bar");
    sideBar.classList.toggle("small-sidebar");

}