import privacy from '../views/privacy.html';
import terms from '../views/terms.html';
import cookies from '../views/cookies.html';
import { handleCookieForm } from '../mouseevents';
import { es } from '../langSelector';
import { en } from '../langSelector';
export const termsPage = (id) => {
  const view = { privacy, terms, cookies };

  const sections = document.querySelectorAll('section');
  const navContainer = document.querySelector('.navContainer');
  navContainer.style.display = 'none';

  sections.forEach((section) => {
    section.id != 'policyTermsCookies'
      ? section.classList.add('hidden')
      : (section.innerHTML = view[`${id}`]);
  });

  const langSelector = document.querySelector('.langSelector');

  const languageSelected = langSelector.querySelector('.language_selected');

  const language = languageSelected.firstElementChild.dataset.language;

  const ctp = document.querySelector('.cookiesTermsPrivacyPage');

  const toTranslate = ctp.querySelectorAll('[data-section]');

  for (const target of toTranslate) {
    const section = target.dataset.section;
    const value = target.dataset.value;

    language === 'es'
      ? (target.innerHTML = es[`${section}`][`${value}`])
      : (target.innerHTML = en[`${section}`][`${value}`]);
  }

  const closeBtn = document.querySelector('.termsCloseBtn');

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

  handleCookieForm();
};
