import './layout.css';
import {homePage} from "../../page/pageHome";
import {aboutPage} from "../../page/pageAbout";
import { exstraPage } from '../../page/pageExstra';

export const getLayout = () => {
    const div = document.createElement('div')
    div.classList.add('container')

    if (window.location.pathname === '/') {
        div.append(homePage());
    }

    if (window.location.pathname === '/about') {
        div.append(aboutPage());
    }

    if (window.location.pathname === '/exstra') {
        div.append(exstraPage());
    }

    return div
}