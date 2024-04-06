import styles from './userCard.module.css';
import {getPicture} from "./picture";

// const pictureButtom = (test, callBack) => {
//     const btn = document.createElement('bottom');
//     btn.innerText = test;
//     if (callBack) {
//         btn.addEventListener('click', () => callBack());
//     }
//     return btn;
//     div.append(bottom(getPicture(data.image, styles.image), () =>{goTo( '/')}))
// };

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