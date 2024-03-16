import './style.css';
import { getHeader } from './feathers/header/header';
import { getLayout } from './feathers/layout/layout';

const app = document.querySelector('#app');
app.append(getHeader());
app.append(getLayout());

//npx json-server db.json


//крупный текст имени и фотография

//кто я?
//где работаю?
//чем занимаюсь сейчас?

//скиллы все технологии которые я освоила
//4-5 проектов: реальные или pet-проекты

//контакты