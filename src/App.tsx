import React, { FC } from "react";
import { ToDoList } from "./models/todo-hooks/ToDoList/ToDoList";
import Container from "@material-ui/core/Container";

export const App: FC = () => {

    return (
        <Container maxWidth="sm">
            <ToDoList/>
        </Container>
    );
};