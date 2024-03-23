import gsap from 'gsap';
import maincontent from './views/maincontent.html';

const preloader = document.querySelector('.preloader');
const mainRoot = document.querySelector('#root');

mainRoot.style.opacity = 0;
const logo = preloader.querySelector('div');

const TL = gsap.timeline();

TL.to(preloader, {
  height: 0,
  duration: 1,
  ease: 'expoScale',
  delay: 2,
}).to(mainRoot, {
  opacity: 1,
  duration: 0.3,
  ease: 'expoScale',
});

window.onload = function () {
  console.log('loaded');
};
