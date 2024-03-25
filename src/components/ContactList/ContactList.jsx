import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import  Contact  from '../Contact/Contact';
import { StyledContactList } from './ContactList.styled'; 
import { selectNameFilter } from '../../redux/filtersSlice';

function ContactList() {
  const selectedContacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const contacts = selectedContacts.filter((contact) => {
    const name = typeof contact.name === "string" ? contact.name.toLowerCase() : "";
    return name.includes(filter.toLowerCase());
  });

  return (
    <StyledContactList>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </StyledContactList>

  );
}

export default ContactList;

