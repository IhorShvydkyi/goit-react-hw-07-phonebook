import Container from "./components/Container/Container";
import { Title, ContactsTitle } from "./App.styled";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/Contacts/ContactList";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
        <ToastContainer />
      </Container>
    </>
  );
}
