import styles from './userCard.module.css';
import {getPicture} from "./picture";

const imageHref = data => {
    const div = document.createElement('div')
    const a = document.createElement('a');
    a.href = 'http://localhost:5173/'
    a.append(getPicture(data.image, styles.image))
    div.append(a);

    return div;
}


export const userCard = data => {
    const div = document.createElement('div')
    const name = document.createElement('p')

    name.innerText = data.name
    name.classList.add(styles.name)
    div.classList.add(styles.container)

    div.append(imageHref(data))
    div.append(name)
    return div;
};