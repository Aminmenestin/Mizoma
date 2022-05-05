var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function myFunction(x) {
  x.classList.toggle("change");
}


// header toggle
const nav = document.querySelector('#nav');

function open_sidebar() {
  nav.classList.add('active');
  if (open_search.classList.contains('active')) {
    open_search.classList.remove('active');
  }
}
function close_sidebar() {
  nav.classList.remove('active');
}





const open_search = document.querySelector('.open-search');

function open_search_bar() {
  open_search.classList.add('active');
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
}

function close_search_bar() {
  open_search.classList.remove('active');
}


const open_search_input = document.querySelector('.open_search_input');
const open_search_button = open_search.firstElementChild;

open_search_input.addEventListener('keyup', function (e) {
  if(e.target.value==''){
    open_search_button.setAttribute('disabled','disabled');
    open_search_button.style.background = '#fff';
    open_search_button.classList.remove('active');
  }
  else{
    open_search_button.removeAttribute('disabled');
    open_search_button.style.background = '#fe4a1b';
    open_search_button.classList.add('active');
  }
})

