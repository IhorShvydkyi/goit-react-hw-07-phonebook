import { useState } from "react";
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from "../../redux/contacts/contact-slice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import toastNotification from "../Notifications/notification";
import { FormStyled, Label, Input, AddButton } from "./Form.styled";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setPhone(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const contactContent = {
      name,
      phone,
    };

    const isContactNameInArray = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === contactContent.name.toLowerCase()
    );
    const isContactNumberInArray = contacts.find(
      (contact) => contact.phone === contactContent.phone
    );
    if (isContactNameInArray) {
      return toastNotification(name);
    }
    if (isContactNumberInArray) {
      return toastNotification(phone);
    }

    createContact(contactContent);
    toast.success(" Your contact was add successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setPhone("");
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
          value={phone}
          onChange={handleChange}
        />
      </Label>

      <AddButton type="submit">Add to contacts</AddButton>
    </FormStyled>
  );
}
