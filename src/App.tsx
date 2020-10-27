import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { navigate, Router } from "@reach/router";
import React, { FC, useState } from "react";
import { ToDoList as ToDoListFunction } from "./modules/todo-hooks/ToDoList/ToDoList";
import { ToDoList as ToDoListFunctionRedux } from "./modules/todo-hooks-redux/ToDoList/ToDoList";
import { ToDoList as ToDoListClass } from "./modules/todo-classes/ToDoList/ToDoList";
import { ToDoList as ToDoListClassRedux } from "./modules/todo-classes-redux/ToDoList/ToDoList";

const useStyles = makeStyles(() => ({
    container: {
        "flex-grow": 1,
        display:"flex",
        "flex-direction":"column"
    },
}));

const routes={
    "todo-hook":"/todo-hook",
    "todo-hook-redux":"/todo-hook-redux",
    "todo-class":"/todo-class",
    "todo-class-redux":"/todo-class-redux",
};

export const App: FC = () => {
    const [value,setValue]=useState("");
    const classes = useStyles();

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Container maxWidth="sm" className={classes.container}>
                <Router>
                    <ToDoListFunction path={routes["todo-hook"]} default/>
                    <ToDoListFunctionRedux path={routes["todo-hook-redux"]}/>
                    <ToDoListClass path={routes["todo-class"]}/>
                    <ToDoListClassRedux path={routes["todo-class-redux"]}/>
                </Router>
            </Container>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction
                    onClick={()=>navigate(routes["todo-hook"])}
                    label="Hooks"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    onClick={()=>navigate(routes["todo-hook-redux"])}
                    label="Hooks redux"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    onClick={()=>navigate(routes["todo-class"])}
                    label="Classes"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    onClick={()=>navigate(routes["todo-class-redux"])}
                    label="Classes Redux"
                    icon={<FavoriteIcon />}
                />
            </BottomNavigation>
        </Container>
    );
};