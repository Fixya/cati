import styles from './homePage.module.css';
import { getPart } from '../api/getPart';
import {activityCard} from "../components/activityCard";


export const homePage = () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'divContainer')

    div.classList.add(styles.container)

    getPart('activity').then(data =>
      data.data.map(activity => div.append(activityCard(activity)))
    );

    return div;
};