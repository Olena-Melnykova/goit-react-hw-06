import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Button, ContactContainer, ContactName } from './Contact.styled.jsx';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactName>{name}: {number}</ContactName>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </ContactContainer>
  );
}

export default Contact;
























// import { FaUser } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import css from "./Contact.module.css";
// import { ContactContainer, ContactName, Button } from './Contact.styled.jsx';
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";

// export default function Contact({id, name, number }) {
//   const dispatch = useDispatch();
//   return (
//     <ContactContainer>
//       <div>
//         <ContactName>
//           {name}
//         </ContactName>
//         <ContactName>
//           {number}
//         </ContactName>
//       </div>
//       <Button onClick={() => dispatch(deleteContact(id))}>
//         Delete
//       </Button>
//     </ContactContainer>
//   );
// }




