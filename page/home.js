import styles from './homePage.module.css';
import { getPart } from '../api/getPart';
import { userCard } from '../components/userCard';
import {activityCard} from "../components/activityCard";
import {skillCard} from "../components/skillCard";
import {contactsCard} from "../components/contactsCard";


export const homePage = () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'divContainer')

    div.classList.add(styles.container)

    getPart('user').then(data =>
        data.data.map(user => div.append(userCard(user)))
    );

    getPart('activity').then(data =>
      data.data.map(activity => div.append(activityCard(activity)))
    );

    getPart('skill').then(data =>
      data.data.map(skill => div.append(skillCard(skill)))
    );

    getPart('contacts').then(data =>
      data.data.map(contact => div.append(contactsCard(contact)))
    );

    return div;
};







//MyITStepBy@gmail.com
//8 025 905-00-05