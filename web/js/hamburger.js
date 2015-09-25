/* Copyright (c) Udacity.com */

/*
 * Open the drawer when the menu ison is clicked.
 */
var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('#drawer');

//alert("In javascript file");

menu.addEventListener('click', function (e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
  e.preventDefault();
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});

