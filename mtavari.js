document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
      e.preventDefault(); 
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })



  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 124);
});

window.addEventListener('scroll', function() {
    var img = this.document.querySelector(".logo");
    img.classList.toggle('imgon', window.scrollY > 125);
});

function togglePopup() {
    document.getElementById("popup1").classList.toggle("active");
}

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
let intervalTime = 4000; // Time between slides in milliseconds
let autoPlayInterval; // Variable to hold setInterval ID
let clickInProgress = false; // Flag to indicate whether a click event is in progress

// Function to move to the next slide
function moveToNextSlide() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

// Function to move to the previous slide
function moveToPrevSlide() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

// Function to reload the slider with the current active slide
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
}

// Function to handle dot clicks
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

// Event listener for next button
next.onclick = function() {
    if (!clickInProgress) {
        clickInProgress = true;
        moveToNextSlide();
        delayAutoPlay(); // Delay autoplay after manual interaction
    }
}

// Event listener for previous button
prev.onclick = function() {
    if (!clickInProgress) {
        clickInProgress = true;
        moveToPrevSlide();
        delayAutoPlay(); // Delay autoplay after manual interaction
    }
}

// Function to start autoplay
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveToNextSlide();
        delayAutoPlay(); // Delay autoplay after automatic slide change
    }, intervalTime);
}

// Function to stop autoplay
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Function to delay autoplay after manual interaction
function delayAutoPlay() {
    setTimeout(() => {
        clickInProgress = false;
    }, 50); // Reset clickInProgress flag after a short delay
}

// Start autoplay when the page loads
window.onload = function() {
    reloadSlider(); // Reload slider before starting autoplay
    startAutoPlay();
}

// Stop autoplay when the page is resized
window.onresize = function(event) {
    reloadSlider();
    stopAutoPlay();
};



document.getElementById("searchbtn").addEventListener("click", function() {
    var inputValue = document.getElementById("searchinp").value;

    localStorage.setItem("searchQuery", inputValue);   
    window.location.href = "./search-result.html";
});
