import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { RouteComponentProps } from "@reach/router";
import React, { FC, useCallback } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { useTypedSelector, useAppDispatch } from "../../../store/store";
import { todoActions } from "../../../reducers/toDoSlice";

const useStyles = makeStyles(() => ({
    paper: {
        padding: "14px",
    },
}));

export const ToDoList:FC<RouteComponentProps> = () =>{
    const classes = useStyles();
    const ids = useTypedSelector(store=>store.todo.map(item=>item.id),(left,right)=>left.length===right.length);
    const dispatch = useAppDispatch();
    const addToDo=useCallback(()=>{
        dispatch(todoActions.createToDo());
    },[dispatch]);

    console.log("render ToDoList hooks redux, date:",new Date().toISOString());
    return (
        <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom>
                ToDo on hooks Redux
            </Typography>
            <List>
                {ids.map((id)=>(
                    <ToDoItem
                        key={id}
                        id={id}
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