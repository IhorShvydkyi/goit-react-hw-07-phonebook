import { useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contacts/contact-slice";
import Spinner from "../Spinner/Spinner";
// import contactsActions from "../../redux/contacts/contacts-actions";
// import { getVisibleContact } from "../../redux/contacts/contacts-selectors";
import {
  ContactListStyled,
  ContactItem,
  Number,
  DeleteBtn,
} from "./ContactList.styled";

const ContactsList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const getFilteredContacts = (contacts) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactFilterList = contacts ? getFilteredContacts(contacts) : null;
  const [deleteContact] = useDeleteContactMutation();
  // const onDelete = (id) => dispatch(contactsActions.deleteContact(id))

  return (
    <>
      {isFetching && <Spinner />}
      {contacts && (
        <ContactListStyled>
          {contactFilterList.map((item) => (
            <ContactItem key={item.id}>
              <Number>
                {item.name}: {item.phone}
              </Number>
              <DeleteBtn type="button" onClick={() => deleteContact(item.id)}>
                Delete
              </DeleteBtn>
            </ContactItem>
          ))}
        </ContactListStyled>
      )}
    </>
  );
};

export default ContactsList;
