import { homePage } from '../controller/home';
import { aboutPage } from '../controller/about';
import { servicesPage } from '../controller/services';
import { contactPage } from '../controller/contact';
import { notFoundPage } from '../controller/notFound';

window.addEventListener('hashchange', (e) => {
  console.log(window.location.hash);
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
    default: {
      notFoundPage();
    }
  }
};
