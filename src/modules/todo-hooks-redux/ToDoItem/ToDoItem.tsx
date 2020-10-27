import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { FC, memo } from "react";
import { todoActions } from "../../../reducers/toDoSlice";
import { useAppDispatch, useTypedSelector } from "../../../store/store";

interface IToDoItemProps {
    id:string;
}

export const ToDoItem:FC<IToDoItemProps>=memo(({
    id,
})=>{
    const {
        todo : item,
        index
    } = useTypedSelector((store)=>{
        const index = store.todo.findIndex(item=>item.id===id);
        return {
            todo:store.todo[index],
            index
        };
    },
    (left,right)=>left.todo===right.todo);
    const dispatch = useAppDispatch();
    const updateToDoById = (id:string, value:string)=>dispatch(todoActions.updateToDoById({id, value}));
    const deleteToDo = (id:string)=>dispatch(todoActions.deleteToDo(id));

    console.log("render ToDoItem hooks redux", id);
    return (
        <ListItem>
            <div style={{marginRight:"4px"}}>{index+1}</div>
            <TextField
                id={item.id}
                value={item.text}
                onChange={(e)=>updateToDoById(item.id, e.target.value)}
            />
            <IconButton
                aria-label="delete"
                color="secondary"
                size="small"
                onClick={()=>deleteToDo(item.id)}
            >
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
});