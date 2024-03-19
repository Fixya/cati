import styles from './homePage.module.css';
import { getPart } from '../api/getPart';
import { skillCard } from '../components/skillCard';

export const aboutPage = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'divSkill')

  div.classList.add(styles.container)

  getPart('activity').then(data =>
    data.data.map(skill => div.append(skillCard(skill)))
  );

  return div;
};