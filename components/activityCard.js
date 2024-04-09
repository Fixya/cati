import styles from './activityCard.module.css'
import { exstraText } from './exstraText';

const renderServerValues = (data, style) => {
    const element = document.createElement('p')
    element.innerText = data.title
    element.classList.add(style)
    return element
}

export const activityCard = data => {
    const div = document.createElement('div')

    div.classList.add(styles.container)

    div.append(exstraText(data.Im.specification, styles.text, renderServerValues(data.Im, styles.Im)))
    div.append(exstraText(data.job.specification, styles.text, renderServerValues(data.job, styles.job)))
    div.append(exstraText(data.affair.specification, styles.text, renderServerValues(data.affair, styles.affair)))
    return div;
}