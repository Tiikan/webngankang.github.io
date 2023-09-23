const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// javadesing code html block
//header link
let navbar = document.querySelector(".navbar");

// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let helpArrow = document.querySelector(".help-arrow ");
helpArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
let enArrow = document.querySelector(".en-arrow");
enArrow.onclick = function () {
  navLinks.classList.toggle("showr");
};

///html block code link javaScript + html + css
const casebox = document.querySelector(".casebox");
const boxsize = document.querySelector(".boxsize");
const firstCarsWidth = boxsize.querySelector(".cars").offsetWidth;
const btnArrow = document.querySelectorAll(".casebox i");
const boxsizeChildrens = [...boxsize.children];

let isStarting = false,
  isAutoPlaying = true,
  startingX,
  playScrollLeft,
  timeId;

// Get the number of cards that can fit in the carousel at once
let carsPerView = Math.round(boxsize.offsetWidth / firstCarsWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
boxsizeChildrens
  .slice(-carsPerView)
  .reverse()
  .forEach((cars) => {
    boxsize.insertAdjacentHTML("afterbegin", cars.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
boxsizeChildrens.slice(0, carsPerView).forEach((cars) => {
  boxsize.insertAdjacentHTML("beforeend", cars.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
boxsize.classList.add("no-transition");
boxsize.scrollLeft = boxsize.offsetWidth;
boxsize.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
btnArrow.forEach((btn) => {
  btn.addEventListener("click", () => {
    boxsize.scrollLeft += btn.id == "lefts" ? -firstCarsWidth : firstCarsWidth;
  });
});

const startDrarg = (e) => {
  isStarting = true;
  boxsize.classList.add("dragsting");
  // Records the initial cursor and scroll position of the carousel
  startingX = e.pageX;
  playScrollLeft = boxsize.scrollLeft;
};

const dragsting = (e) => {
  if (!isStarting) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  boxsize.scrollLeft = playScrollLeft - (e.pageX - startingX);
};

const dragStoping = () => {
  isStarting = false;
  boxsize.classList.remove("dragsting");
};

const finScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (boxsize.scrollLeft === 0) {
    boxsize.classList.add("not-transition");
    boxsize.scrollLeft = boxsize.scrollWidth - 2 * boxsize.offsetWidth;
    boxsize.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(boxsize.scrollLeft) ===
    boxsize.scrollWidth - boxsize.offsetWidth
  ) {
    boxsize.classList.add("not-transition");
    boxsize.scrollLeft = boxsize.offsetWidth;
    boxsize.classList.remove("not-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeId);
  if (!casebox.matches(":hover")) autoPlaying();
};

const autoPlaying = () => {
  if (casebox.innerWidth < 800 || !isAutoPlaying) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeId = setTimeout(() => (boxsize.scrollLeft += firstCarsWidth), 3500);
};
autoPlaying();

boxsize.addEventListener("mousedown", startDrarg);
boxsize.addEventListener("mousemove", dragsting);
document.addEventListener("mouseup", dragStoping);
boxsize.addEventListener("scroll", finScroll);
casebox.addEventListener("mouseenter", () => clearTimeout(timeId));
casebox.addEventListener("mouseleave", autoPlaying);
