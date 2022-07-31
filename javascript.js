const mySlides = document.querySelectorAll('.mySlides');
const dot = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let duration = 5000;


let index = 0;

next.addEventListener('click', function () {
  changeslide('next');
})
prev.addEventListener('click', function () {
  changeslide('prev');
})


function changeslide(value) {
  progress()
  clearInterval(timer);
  timer = setInterval(autochange, duration);

  if (value == 'next') {
    if (index == mySlides.length - 1) {
      index = 0;
    }
    else {
      index++;
    }
  }
  else {
    if (index == 0) {
      index = mySlides.length - 1;
    }
    else {
      index--;
    }
  }

  for (let i = 0; i < mySlides.length; i++) {
    mySlides[i].classList.remove('active');
  }

  for (let j = 0; j < dot.length; j++) {
    dot[j].classList.remove('active');
  }
  mySlides[index].classList.add('active');
  dot[index].classList.add('active');
}




function currentSlide(index) {
  progress()
  clearInterval(timer);
  timer = setInterval(autochange, duration);

  for (let i = 0; i < mySlides.length; i++) {
    mySlides[i].classList.remove('active');
  }

  for (let j = 0; j < dot.length; j++) {
    dot[j].classList.remove('active');
  }

  mySlides[index].classList.add('active');
  dot[index].classList.add('active');
}


const main_progress = document.querySelector('.progress');


function progress(){
  main_progress.innerHTML='';
  const div = document.createElement('div');
  div.classList.add('progress_bar');
  main_progress.appendChild(div);
}

progress();



function autochange() {
  changeslide('next');
}

let timer = setInterval(autochange, duration);




// header toggle
const nav = document.querySelector('#nav');

function open_sidebar() {
  nav.classList.add('active');
  if (open_search.classList.contains('active')) {
    open_search.classList.remove('active');
    open_search1.classList.remove('active');
  }
}
function close_sidebar() {
  nav.classList.remove('active');
}








const open_search = document.querySelector('.open-search');
const open_search1 = document.querySelector('.open-search1');
const open_search_input1 = document.querySelector('.open_search_input1');

function open_search_bar() {
  open_search.classList.add('active');
  open_search1.classList.add('active');
  open_search_input1.focus()
  // open_search_input.focus()
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
}


const btn=document.querySelectorAll('.btn');

for(let i=0;i<btn.length;i++){
  btn[i].addEventListener('click',function(){
    close_search_bar()
  })
}


function close_search_bar() {
  open_search_input1.value='';
  open_search.classList.remove('active');
  open_search1.classList.remove('active');
  open_search_button1.setAttribute('disabled', 'disabled');
  open_search_button1.style.background = '#fff';
  open_search_button1.classList.remove('active');
  open_search_input.value='';
  open_search_button.setAttribute('disabled', 'disabled');
  open_search_button.style.background = '#fff';
  open_search_button.classList.remove('active');
}


const open_search_input = document.querySelector('.open_search_input');
const open_search_button = open_search.firstElementChild;

open_search_input.addEventListener('input', function (e) {
  if (e.target.value == 0) {
    open_search_button.setAttribute('disabled', 'disabled');
    open_search_button.style.background = '#fff';
    open_search_button.classList.remove('active');
  }
  else {
    open_search_button.removeAttribute('disabled');
    open_search_button.style.background = '#fe4a1b';
    open_search_button.classList.add('active');
  }
})


const open_search_button1 = open_search1.firstElementChild;

open_search_input1.addEventListener('input', function (e) {
  if (e.target.value == 0) {
    open_search_button1.setAttribute('disabled', 'disabled');
    open_search_button1.style.background = '#fff';
    open_search_button1.classList.remove('active');
  }
  else {
    open_search_button1.removeAttribute('disabled');
    open_search_button1.style.background = '#fe4a1b';
    open_search_button1.classList.add('active');
  }
})





