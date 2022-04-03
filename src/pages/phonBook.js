import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';
import { useLocalStorage } from 'hooks/useLocaleStorag';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';

export const PhoneBook = () => {
  // const [contact, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  console.log(contacts);
  const generateID = () => nanoid();
  console.log(filter);
  // const changeFilter = e => {
  //   const currentValue = e.currentTarget.value;
  //   setFilter(currentValue);
  // };

  // const addContact = (name, number, value) => {
  //   const dataContact = {
  //     id: generateID(),
  //     name,
  //     number,
  //   };

  //   const searchSameContact = contacts.find(
  //     item => item.name.toLowerCase() === value.toLowerCase()
  //   );

  //   if (searchSameContact) {
  //     alert(`Ну шо не видно, что ${name} таки есть уже?????!!!`);
  //     return;
  //   }
  // };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContact = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={() => dispatch(addContact())} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContact} onDeleteContact={deleteContact} />
    </>
  );
};
