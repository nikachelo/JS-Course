'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const header = document.querySelector('.header');

const nav = document.querySelector('.nav');

const sections = document.querySelectorAll('.section');

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');

///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Smooth scroll

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Guard clause
  if (!clicked) return;
  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });

  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu fade animation

const handleHover = function (e) {
  //
  if (e.target.classList.contains('nav__link')) {
    // Matching (Gavigot links daachira tu ara martla da shevinaxot linki)
    const link = e.target;
    // Linkis siblingebi (1. Avidet parentshi (.nav__links) da chamovidet tito nav linkamde)
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    // Logo (1. avidet parentshi, vipovot img rac aris logo)
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky navigation

const stickyNav = function () {
  nav.classList.toggle('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
});

headerObserver.observe(header);

///////////////////////////////////////
// Show elements on scroll

const showSection = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.2,
});

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy loading image
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Shecvalot src data-src -it
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img ');
      });
      observer.unobserve(entry.target);
    }
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Lazy loading image

let currentSlide = 0;
const maxSlides = slides.length - 1;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide == maxSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide == 0) {
    currentSlide = maxSlides;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

goToSlide(0);

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);
