import styles from './userCard.module.css';
import {getPicture} from "./picture";

export const userCard = data => {
    const div = document.createElement('div')
    const name = document.createElement('p')

    name.innerText = data.name
    name.classList.add(styles.name)
    div.classList.add(styles.container)

    div.append(getPicture(data.image, styles.image))
    div.append(name)
    return div;
};