import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// import LocomotiveScroll from 'locomotive-scroll';
// const locomotiveScroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });

// import Lenis from '@studio-freight/lenis';

// const lenis = new Lenis({});

// lenis.on('scroll', (e) => {
//   //   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

const smallDevice = window.matchMedia('(max-width: 1194px)');
const burgerMenu = document.querySelector('.burgerMenu');
const navBar = document.querySelector('.navBar');
const bars = document.querySelectorAll('.bar');

export function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

window.addEventListener('click', (e) => {
  if (e.target.matches('.burgerMenu') || e.target.matches('.navBarItem')) {
    if (smallDevice.matches) {
      if (!burgerMenu.classList.contains('open')) {
        burgerMenu.classList.add('open');
        burgerMenuAnimationOpen();

        gsap.to('.navBar', {
          height: '100vh',
          opacity: 1,
          duration: 1,
          ease: 'expoScale',
        });
        gsap.fromTo(
          '.navBarItems',
          {
            y: -1000,
          },
          { y: 0, duration: 1, ease: 'expoScale', delay: 0.5 }
        );
        gsap.fromTo(
          '.bottomLinks',
          {
            y: -1000,
          },
          { y: 0, duration: 1, ease: 'expoScale' }
        );
      } else {
        gsap.fromTo(
          '.navBarItems',
          {
            y: 0,
          },
          { y: -1000, duration: 1, ease: 'expoScale' }
        );
        gsap.fromTo(
          '.bottomLinks',
          {
            y: 0,
          },
          { y: -1000, duration: 1, ease: 'expoScale', delay: 0.5 }
        );
        gsap.to('.navBar', {
          height: '0vh',
          opacity: 0,
          duration: 1,
          ease: 'expoScale',
        });
        setTimeout(() => {
          burgerMenuAnimationClose();
        }, 500);
        burgerMenu.classList.remove('open');
      }
    }
  }
});

function burgerMenuAnimationOpen() {
  navBar.classList.add('navBarOpen');

  bars.forEach((bar, key) => {
    bar.setAttribute('id', bar.className + key);

    switch (bar.id) {
      case 'bar0': {
        gsap.to('#bar0', {
          transform: 'rotate(45deg)',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
      case 'bar1': {
        gsap.to('#bar1', { opacity: 0, duration: 0.5, ease: 'expoScale' });
      }
      case 'bar2': {
        gsap.to('#bar2', {
          transform: 'rotate(-45deg)',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
    }
  });
}
function burgerMenuAnimationClose() {
  navBar.classList.remove('navBarOpen');
  bars.forEach((bar, key) => {
    bar.setAttribute('id', bar.className + key);

    switch (bar.id) {
      case 'bar0': {
        gsap.to('#bar0', {
          transform: 'rotate(0deg)',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
      case 'bar1': {
        gsap.to('#bar1', { opacity: 1, duration: 0.5, ease: 'expoScale' });
      }
      case 'bar2': {
        gsap.to('#bar2', {
          transform: 'rotate(0deg)',
          duration: 0.5,
          ease: 'expoScale',
        });
      }
    }
  });
}

if (smallDevice.matches) {
  window.addEventListener('scroll', hideNavBar);
} else {
  window.addEventListener('mousemove', (e) => {
    const mouseToTop = e.clientY;
    const scrollToTop = window.scrollY;
    //console.log(scrollToTop);
    if (scrollToTop === 0 || mouseToTop <= 350) {
      gsap.to('.navContainer', {
        top: '0%',
        duration: 1,
        ease: 'expoOut',
      });
    } else {
      gsap.to('.navContainer', {
        top: '-20%',
        duration: 1,
        ease: 'expoOut',
      });
    }
  });
}

let startPosition = 0;
function hideNavBar() {
  let scrolled = document.documentElement.scrollTop;

  if (scrolled <= startPosition) {
    gsap.to('.navContainer', {
      top: '0%',
      duration: 1,
      ease: 'expoOut',
    });
  } else if (scrolled > startPosition) {
    gsap.to('.navContainer', {
      top: '-20%',
      duration: 1,
      ease: 'expoOut',
    });
  }
  startPosition = scrolled;
}

export const handleCookieForm = () => {
  const popup = document.querySelector('#cookieSettings');
  document.getElementById('cookieForm').addEventListener('submit', (e) => {
    e.preventDefault();
    var selectedOption = document.querySelector(
      'input[name="cookiePreference"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === 'accept') {
        // Code to handle cookie acceptance
        popup.style.display = 'none';
        alert('Thank you for accepting cookies!');
      } else if (selectedOption.value === 'reject') {
        popup.style.display = 'none';
        // Code to handle cookie rejection
        alert('You have rejected cookies.');
        // Additional code like clearing existing cookies or disabling tracking
      }
    } else {
      //alert('Please select your preference!');
    }
  });
};

handleCookieForm();
