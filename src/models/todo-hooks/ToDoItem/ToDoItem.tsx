import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { FC, memo } from "react";
import { IToDo } from "../model/IToDo";

interface IToDoItemProps {
    item:IToDo;
    updateHandler:(id:string, value:string)=>void;
    deleteHandler:(id:string)=>void;
    index:number;
}

export const ToDoItem:FC<IToDoItemProps>=memo(({
    item,
    updateHandler,
    deleteHandler,
    index
})=>{

    console.log("render ToDoItem");
    return (
        <ListItem>
            <div style={{marginRight:"4px"}}>{index+1}</div>
            <TextField
                id={item.id}
                value={item.text}
                onChange={(e)=>updateHandler(item.id, e.target.value)}
            />
            <IconButton
                aria-label="delete"
                color="secondary"
                size="small"
                onClick={()=>deleteHandler(item.id)}
            >
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
});