import PropTypes from 'prop-types';
import { deleteContacts } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { Td } from './ContactsItem.styled';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <button type="button" onClick={() => dispatch(deleteContacts(id))}>
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
};
