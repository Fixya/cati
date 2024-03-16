import './header.css';
import { getNav } from '../../components/nav';

export const getHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');
  header.append(getNav());
  return header;
};