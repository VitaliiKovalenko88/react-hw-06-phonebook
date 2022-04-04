import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  Table,
  Td,
  Span,
  Div,
  Up,
  Down,
  TdResualt,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    // eslint-disable-next-line react/style-prop-object
    <Table id="phonebook__result">
      // eslint-disable-next-line react/style-prop-object
      <thead>
        <tr>
          <Td>
            <Span> Name</Span>
            <Div>
              <Up>▲</Up>
              <Down>▼</Down>
            </Div>
          </Td>
          <Td>Phone</Td>
          <Td>Action</Td>
        </tr>
      </thead>
      <tbody id="tbody">
        {contacts.map(({ name, id, number }) => {
          return (
            <tr key={id}>
              <ContactItem
                name={name}
                number={number}
                id={id}
                onDeleteContact={onDeleteContact}
              />
            </tr>
          );
        })}
      </tbody>
    </Table>
    // <ul>
    //   {contacts.map(({ name, id, number }) => {
    //     return (
    //       <li key={id}>
    //         <ContactItem
    //           name={name}
    //           number={number}
    //           id={id}
    //           onDeleteContact={onDeleteContact}
    //         />
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }.isRequired
    ).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
