import training from '../views/training.html';
//import '../langSelector.js';
import gsap from 'gsap';
import { changeLanguage } from '../langSelector';
import { es } from '../langSelector';
import { en } from '../langSelector';

export const servicesPagesLoader = (html) => {
  const langSelector = document.querySelector('.langSelector');

  const languageSelected = langSelector.querySelector('.language_selected');

  const language = languageSelected.firstElementChild.dataset.language;

  const servicesBg = document.querySelector('.servicesBg');

  const navContainer = document.querySelector('.navContainer');

  gsap.to(servicesBg, {
    height: '100vh',
    duration: 0.5,
    ease: 'expoScale',
  });

  const TL = gsap.timeline();

  setTimeout(() => {
    servicesBg.innerHTML = html;

    const toTranslate = servicesBg.querySelectorAll('[data-section]');

    for (const target of toTranslate) {
      const section = target.dataset.section;
      const value = target.dataset.value;

      language === 'es'
        ? (target.innerHTML = es[`${section}`][`${value}`])
        : (target.innerHTML = en[`${section}`][`${value}`]);
    }

    navContainer.style.display = 'none';
    TL.from('.textWrapper', {
      opacity: 0,
      y: 2000,
      duration: 0.5,
      ease: 'expoScale',
    })
      .from(
        '.imgWrapper',
        {
          y: 2000,
          duration: 0.8,
          ease: 'expoScale',
        },
        0.5
      )
      .from(
        '.serviceCtaBtn',
        {
          opacity: 0,
          duration: 0.8,
          ease: 'expoScale',
        },
        '<1'
      )
      .from('.xTop', {
        opacity: 0,
        rotate: '0',
      })
      .from(
        '.xBottom',
        {
          opacity: 0,
          rotate: 0,
        },
        '<0.1'
      );
  }, 500);
  window.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('.action-btn')) {
      e.preventDefault();
      TL.reverse(0);

      setTimeout(() => {
        gsap.to(servicesBg, {
          height: '0',
          duration: 0.8,
          ease: 'expoScale',
        });
        servicesBg.innerHTML = '';
        navContainer.style.display = 'flex';
      }, 3500);
      window.location.assign('#services');
    }
  });
};

export const trainingPage = () => {
  servicesPagesLoader(training);
};
