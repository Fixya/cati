import './footer.css';
import { getPart } from '../../api/getPart';
import { contactsCard } from '../../components/contactsCard';

export const getFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  getPart('contacts').then(data =>
    data.data.map(contacts => footer.append(contactsCard(contacts)))
  );

  return footer;
};