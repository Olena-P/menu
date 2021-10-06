import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import NavState from "./context/navState";
import MainMenu from "./components/MainMenu/MainMenu";
import HomePage from "./vievs/HomePage/HomePage";
import TodoFormPage from "./vievs/TodoFormPage/TodoFormPage";
import TodosPage from "./vievs/TodosPage/TodosPage";

function App() {
  return (
    <Container>
      <Suspense>
        <NavState>
          <MainMenu />
          <Switch>
            <Route path="/" exact component={HomePage}>
              <HomePage />
            </Route>

            <Route path="/todoform" component={TodoFormPage}>
              <TodoFormPage />
            </Route>

            <Route path="/todos" component={TodosPage}>
              <TodosPage />
            </Route>

            <Route>
              <HomePage />
            </Route>
          </Switch>
        </NavState>
      </Suspense>
    </Container>
  );
}

export default App;
