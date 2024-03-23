import faq from '../views/faq.html';
import gsap from 'gsap';
import { es } from '../langSelector';
import { en } from '../langSelector';

export const faqPage = (id) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 200);

  const sections = document.querySelectorAll('section');
  const navContainer = document.querySelector('.navContainer');
  navContainer.style.display = 'none';

  sections.forEach((section) => {
    section.id != 'faq'
      ? section.classList.add('hidden')
      : (section.innerHTML = faq);
  });

  const langSelector = document.querySelector('.langSelector');

  const languageSelected = langSelector.querySelector('.language_selected');

  const language = languageSelected.firstElementChild.dataset.language;

  const faqs = document.querySelector('.faqPage');

  const toTranslate = faqs.querySelectorAll('[data-section]');

  for (const target of toTranslate) {
    const section = target.dataset.section;
    const value = target.dataset.value;

    language === 'es'
      ? (target.innerHTML = es[`${section}`][`${value}`])
      : (target.innerHTML = en[`${section}`][`${value}`]);
  }

  const faqParagraph = document.querySelectorAll('.faqParagraph');
  const signs = document.querySelectorAll('.signs');
  const faqBtn = document.querySelectorAll('.faqBtn');

  function showParagraph() {
    faqParagraph.forEach((paragraph, key) => {
      paragraph.id != id
        ? ((paragraph.style.height = '0'),
          paragraph.classList.remove('expanded'),
          (faqBtn[key].lastElementChild.style.display = 'none'))
        : ((paragraph.style.height = 'fit-content'),
          paragraph.classList.add('expanded'));
      if (paragraph.classList.contains('expanded')) {
        faqBtn[key].firstElementChild.style.display = 'none';
      }
    });
  }

  showParagraph();

  faqBtn.forEach((btn, key) => {
    btn.addEventListener('click', (e) => {
      const target = e.target;

      !target.classList.contains('expand')
        ? ((faqParagraph[key].style.height = '0'),
          faqParagraph[key].classList.remove('expanded'),
          (faqBtn[key].firstElementChild.style.display = 'block'),
          (faqBtn[key].lastElementChild.style.display = 'none'))
        : ((faqParagraph[key].style.height = 'fit-content'),
          faqParagraph[key].classList.add('expanded'),
          (faqBtn[key].firstElementChild.style.display = 'none'),
          (faqBtn[key].lastElementChild.style.display = 'block'));
    });
  });

  const closeBtn = document.querySelector('.faqBtnClose');

  closeBtn.addEventListener('click', (e) => {
    //e.preventDefault();
    const target = e.target;

    sections.forEach((section) => {
      if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        navContainer.style.display = 'flex';
      } else {
        section.innerHTML = '';
      }
    });
  });
};
