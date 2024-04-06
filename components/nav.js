import { bottom } from './bottom';
import { goTo } from '../helpers/goTo';

const navList = [
  {
    path: '/',
    name: 'Обо мне'
  },
  {
    path: '/about',
    name: 'Мои скилы'
  },
  {
    path: '/exstra',
    name: 'Доп. контент'
  }
];

export const getNav = () => {
  const ul = document.createElement('ul');
  ul.classList.add('ulClass')

  navList.forEach(navItem => {
    const li = document.createElement('li');
    li.classList.add('liClass')
    li.append(bottom(navItem.name, () =>{goTo(navItem.path)}));
    ul.append(li);
  });

  return ul;
};
