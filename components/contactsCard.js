import styles from './activitesCard.module.css'
import {exstraText} from './exstraText';
import { getPicture } from './picture';

const renderServerValues = (data, style) => {
    const element = document.createElement('p')
    element.innerText = data.title
    element.classList.add(style)
    return element
}

const renderServerValuesHref = data => {
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

    div.append(renderServerValuesHref(data))

    // div.append(exstraText(data.email, styles.text, renderServerValues(data.email, styles.email)))
    // div.append(exstraText(data.phone, styles.text, renderServerValues(data.phone, styles.phone)))
    return div;
}