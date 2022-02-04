import { useDispatch, useSelector } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import { getVisibleContact } from "../../redux/contacts/contacts-selectors";
import {
  ContactListStyled,
  ContactItem,
  Number,
  DeleteBtn,
} from "./ContactList.styled";

const ContactsList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(contactsActions.deleteContact(id));

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Number>
            {name}: {number}
          </Number>
          <DeleteBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};

export default ContactsList;
