import styles from './activitesCard.module.css'
import {exstraText} from './exstraText';

const renderServerValues = (data, style) => {
    const element = document.createElement('p')
    element.innerText = data.title
    element.classList.add(style)
    return element
}

export const contactsCard = data => {
    const div = document.createElement('div')

    div.classList.add(styles.container)

    div.append(exstraText(data.email, styles.text, renderServerValues(data.email, styles.email)))
    div.append(exstraText(data.phone, styles.text, renderServerValues(data.phone, styles.phone)))
    return div;
}

// data.relations.map((item) => {
//     div.append(exstraText(data.relations[item[el]], styles.text, renderServerValues(data.relations[item], styles[item])))
// })