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
        console.log(item)
        const a = document.createElement('a');
        a.href = item.href
        a.target = "_blank"
        a.innerText = item.specification
        a.classList.add(styles.href)
        console.log(a)
        div.append(a);
    });

    return div;
}

export const skillCard = data => {
    const div = document.createElement('div')

    div.classList.add(styles.container)

    div.append(exstraText(data.languages, styles.text, renderServerValuesLi(data.languages)))
    div.append(renderServerValuesHref(data))
    return div;
}