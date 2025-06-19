const toggleBtn = document.getElementById('dropdown-trigger');
const menu = document.getElementById('dropdown-menu');

// Toggle dropdown when clicking on button
toggleBtn.addEventListener('click', (e) => {
e.stopPropagation(); // Prevent click from bubbling up
menu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
	menu.classList.remove('show');
}
});

// Toggle overlay on slide images on mobile
if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
  const slides = document.querySelectorAll('.slide-container');

  slides.forEach((slide) => {
    const overlay = slide.querySelector('.overlay');

    slide.addEventListener('click', () => {
      overlay.classList.toggle('active');
    });
  });
}


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 