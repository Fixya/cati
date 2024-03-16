import { bottom } from './bottom';
import { goTo } from '../helpers/goTo';

const navList = [
  {
    path: '/',
    name: 'я любимая'
  },
  {
    path: '/about',
    name: 'больше подробностей, если скучно'
  }
];

export const getNav = () => {
  const ul = document.createElement('ul');
  ul.classList.add('ulClass')

  navList.forEach(navItem => {
    const li = document.createElement('li');
    li.classList.add('liClass')
    li.append(bottom(navItem.name, () => goTo(navItem.path)));
    ul.append(li);
  });

  return ul;
};
