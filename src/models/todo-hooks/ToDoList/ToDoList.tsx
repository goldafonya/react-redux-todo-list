import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { useToDoList } from "./useToDoList";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    paper: {
        padding: "14px",
    },
}));

export const ToDoList:FC = () =>{
    const {
        todoList,
        addToDo,
        deleteToDo,
        updateToDoById
    }=useToDoList();
    const classes = useStyles();

    console.log("render ToDoList, date:",new Date().toISOString());
    return (
        <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom>
                ToDo on hooks
            </Typography>
            <List>
                {todoList.map((l,index)=>(
                    <ToDoItem
                        key={l.id}
                        index={index}
                        item={l}
                        updateHandler={updateToDoById}
                        deleteHandler={deleteToDo}
                    />
                ))}
            </List>
            <Button
                onClick={addToDo}
                variant="outlined"
                startIcon={<AddIcon/>}
            >
                Add ToDoItem
            </Button>
        </Paper>
    );
};