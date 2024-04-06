import styles from '../page/page.module.css';
import { exstraCard } from '../components/exstraCard';


export const exstraPage = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'divExstra')

  div.classList.add(styles.container)

  div.append(exstraCard())
  return div;
}