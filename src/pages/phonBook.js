import { Container } from 'components/Container/Container';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, deleteContacts } from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';

export const PhoneBook = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const generateID = () => nanoid();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['contacts', contacts]);

  const addContact = (name, number, value) => {
    const dataContact = {
      id: generateID(),
      name,
      number,
    };

    const searchSameContact = contacts.find(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    );

    if (searchSameContact) {
      alert(`Ну шо не видно, что ${name} таки есть уже?????!!!`);
      return;
    }
    dispatch(addContacts(dataContact));
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const changeFilters = e => {
    const currentValue = e.currentTarget.value;
    dispatch(changeFilter(currentValue));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilters} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
