import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export function ContactList({ contactList, onDelete }) {
  return (
    <>
      <ul className={s.contactList}>
        {contactList.map(({ id, name, number }) => (
          <li key={id} id={id} className={s.contactItem}>
            {name} {number}
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
