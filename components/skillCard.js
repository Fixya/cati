import styles from './skillCard.module.css'
import {exstraText} from './exstraText';

const renderServerValuesLi = data => {
    const ul = document.createElement('ul');
    data.title.map((item) => {
        const li = document.createElement('li');
        li.innerText = item
        li.classList.add(styles.languages)
        ul.append(li);
    });

    return ul;
}

const renderServerValuesHref = data => {
    const div = document.createElement('div')
    data.projects.map((item) => {
        const a = document.createElement('a');
        a.href = item.href
        a.target = "_blank"
        a.innerText = item.specification
        a.classList.add(styles.href)
        div.append(a);
    });

    return div;
}

export const skillCard = data => {
    const div = document.createElement('div')

    div.classList.add(styles.container)

    div.append(exstraText(data.languages.specification, styles.textLanguages, renderServerValuesLi(data.languages)))
    div.append(exstraText("Мои работы в GitHub", styles.textHref, renderServerValuesHref(data)))
    return div;
}