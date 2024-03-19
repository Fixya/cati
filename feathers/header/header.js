import './header.css';
import { getNav } from '../../components/nav';
import { getPart } from '../../api/getPart';
import { userCard } from '../../components/userCard';

export const getHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  getPart('user').then(data =>
    data.data.map(user => header.append(userCard(user)))
  );

  header.append(getNav());
  return header;
};