import styles from './contactsCard.module.css'
import {getPicture} from "./picture.js";

const renderServerValuesHrefImage = data => {
    const div = document.createElement('div')
    data.contact.map((item) => {
        const a = document.createElement('a');
        a.href = item.href
        a.classList.add(styles.href)
        a.append(getPicture(item.image, styles.image))
        div.append(a);
    });

    return div;
}

export const contactsCard = data => {
    const div = document.createElement('div')

    div.classList.add(styles.container)

    div.append(renderServerValuesHrefImage(data))
    return div;
}