import PropTypes from 'prop-types';
import { Td } from './ContactsItem.styled';

export const ContactItem = ({ name, id, number, onDeleteContact }) => {
  return (
    <>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <button
          type="button"
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </Td>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
