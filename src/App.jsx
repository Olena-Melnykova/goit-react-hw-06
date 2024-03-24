import ContactForm from './components/Form/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { AppStyled, Title } from './App.styled.jsx'; 

function App() {
  return (
    <AppStyled> 
      <Title>Contact Book</Title> 
      <ContactForm />
      <SearchBox />
      <ContactList />
    </AppStyled>
  );
}

export default App;