import management from '../views/management.html';
import gsap from 'gsap';
import { servicesPagesLoader } from './training';
export const managementPage = () => {
  servicesPagesLoader(management);
};
