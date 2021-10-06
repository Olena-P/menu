import {
  List,
  Item,
  Title,
  BtnContainer,
  EditBtn,
  DeleteBtn,
} from "./TodoForm.styled";
import { FaEdit, FaTrash } from "react-icons/fa";

export const TodoForm = ({ items, removeItem, editItem }) => {
  return (
    <List>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <Item key={id}>
            <Title>{title}</Title>
            <BtnContainer>
              <EditBtn type="button" onClick={() => editItem(id)}>
                <FaEdit />
              </EditBtn>
              <DeleteBtn type="button" onClick={() => removeItem(id)}>
                <FaTrash />
              </DeleteBtn>
            </BtnContainer>
          </Item>
        );
      })}
    </List>
  );
};

export default TodoForm;
