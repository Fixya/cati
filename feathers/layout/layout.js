import './layout.css';
import {homePage} from "../../page/home";
//import {aboutPage} from "../../page/about";

export const getLayout = () => {
    const div = document.createElement('div')
    div.classList.add('container')

    if (window.location.pathname === '/') {
        div.append(homePage());
    }

    if (window.location.pathname === '/about') {
        //div.append(aboutPage());
        console.log('error 404')
    }

    return div
}