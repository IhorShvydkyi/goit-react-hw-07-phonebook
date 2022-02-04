import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import { Label, Input } from "./Filter.styled";

import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        placeholder=""
        type="text"
        value={value}
        onChange={(e) => {
          dispatch(contactsActions.filterContact(e.target.value));
        }}
      />
    </Label>
  );
};

export default Filter;
