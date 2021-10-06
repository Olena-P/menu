import React, { useState, useEffect } from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import Alert from "../../components/Alerts/Alerts";
import {
  SectionCenter,
  GroceryForm,
  Title,
  FormControl,
  Grocery,
  SubmitBtn,
  GroceryContainer,
  ClearBtn,
} from "./TodoFormPage.styled";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function TodoFormPage() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <SectionCenter>
      <GroceryForm onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <Title>Todo List</Title>
        <FormControl>
          <Grocery
            type="text"
            placeholder="Input your Todo List"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SubmitBtn type="submit">{isEditing ? "edit" : "Submit!"}</SubmitBtn>
        </FormControl>
      </GroceryForm>
      {list.length > 0 && (
        <GroceryContainer>
          <TodoForm items={list} removeItem={removeItem} editItem={editItem} />
          <ClearBtn onClick={clearList}>clear items</ClearBtn>
        </GroceryContainer>
      )}
    </SectionCenter>
  );
}

export default TodoFormPage;
