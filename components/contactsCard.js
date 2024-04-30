import styles from './contactsCard.module.css'
import {getPicture} from "./picture.js";
import { exstraText } from './exstraText';

const renderServerValuesHrefImage = data => {
    const div = document.createElement('div')
    data.contact.map((item) => {
        const a = document.createElement('a');
        a.href = item.href
        a.target = "_blank"
        a.classList.add(styles.href)
        a.append(getPicture(item.image, styles.image))
        div.append(a);
    });

    return div;
}

export const contactsCard = data => {
    const div = document.createElement('div')

    div.classList.add(styles.container)

    div.append(exstraText(data, styles.text, renderServerValuesHrefImage(data)))
    return div;
}