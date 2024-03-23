import { homePage } from '../controller/home';
import { aboutPage } from '../controller/about';
import { servicesPage } from '../controller/services';
import { contactPage } from '../controller/contact';
import { notFoundPage } from '../controller/notFound';
import { faqPage } from '../controller/faq';
import { consultancyPage } from '../controller/consultancy';
import { trainingPage } from '../controller/training';
import { managementPage } from '../controller/management';
import { termsPage } from '../controller/terms';

window.addEventListener('hashchange', (e) => {
  //console.log(window.location.hash);
  const locationHref = window.location.hash;
  router(locationHref);
});

const router = (route) => {
  switch (route) {
    case '#home': {
      homePage();

      break;
    }
    case '#about': {
      aboutPage();

      break;
    }
    case '#services': {
      servicesPage();

      break;
    }
    case '#contact': {
      contactPage();

      break;
    }
    case '#faqOne': {
      faqPage('fpFst');

      break;
    }
    case '#faqTwo': {
      faqPage('fpSnd');

      break;
    }
    case '#faqThree': {
      faqPage('fpTrd');

      break;
    }
    case '#faqFour': {
      faqPage('fpFth');

      break;
    }
    case '#consultancy': {
      consultancyPage();

      break;
    }
    case '#training': {
      trainingPage();

      break;
    }
    case '#management': {
      managementPage();

      break;
    }
    case '#privacy': {
      termsPage('privacy');

      break;
    }
    case '#terms': {
      termsPage('terms');

      break;
    }
    case '#cookies': {
      termsPage('cookies');

      break;
    }
    default: {
      notFoundPage();
    }
  }
};
