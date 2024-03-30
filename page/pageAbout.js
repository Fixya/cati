import styles from './page.module.css';
import { getPart } from '../api/getPart';
import { skillCard } from '../components/skillCard';

export const aboutPage = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'divSkill')

  div.classList.add(styles.container)

  getPart('skill').then(data =>
    data.data.map(skill => div.append(skillCard(skill)))
  );

  return div;
};