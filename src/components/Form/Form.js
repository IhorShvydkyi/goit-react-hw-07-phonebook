import { useLocaleStorage } from "../../hooks/useLocaleStorage";
import { useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import { v4 as uuidv4 } from "uuid";
import { FormStyled, Label, Input, AddButton } from "./Form.styled";

export default function Form() {
  const [name, setName] = useLocaleStorage("name", "");
  const [number, setNumber] = useLocaleStorage("number", "");
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const contact = { id: uuidv4(), name, number };
    dispatch(contactsActions.addContact(contact));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>

      <AddButton type="submit">Add to contacts</AddButton>
    </FormStyled>
  );
}
