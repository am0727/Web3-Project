// SLIDER

var users = document.querySelectorAll('.user')
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var counter = 0;

console.log(users)

next.addEventListener("click", function () {
  counter = counter + 1;

  if (counter > users.length - 1) {
    counter = 0;
  }
    removeActiveClasses()
  users[counter].classList.add('show');
  console.log(counter);
});

prev.addEventListener("click", function () {
  counter = counter - 1;

  if (counter < 0) {
    counter = users.length - 1;
  }
  removeActiveClasses()
  users[counter].classList.add('show');
  console.log(counter);
});

function removeActiveClasses() {
    users.forEach(user => {
        user.classList.remove('show')
    })
}

// Navigation

const hamburger = document.querySelector('.hamburger')
const hero = document.querySelector('.hero')
const navigation = document.querySelector('.navLinks')
const header = document.querySelector('header')

hamburger.addEventListener('click', () => {
  hero.classList.toggle('active')
  navigation.classList.toggle('active')
  header.classList.toggle('active')
  hamburger.classList.toggle('active')
})

// Scroll button

/* <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button> */

var scrollButton = document.querySelector(".scrollUp");

scrollButton.addEventListener('click', () => {
  topFunction()
  
} )

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}