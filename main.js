import './style.css';
import { getHeader } from './feathers/header/header';
import { getLayout } from './feathers/layout/layout';
import { getFooter } from './feathers/footer/footer';

const app = document.querySelector('#app');
app.append(getHeader());
app.append(getLayout());
app.append(getFooter());

//npx json-server db.json