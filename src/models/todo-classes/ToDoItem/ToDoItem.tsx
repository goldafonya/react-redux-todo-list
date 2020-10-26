import React, { ReactElement } from "react";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface IToDoItemProps {
    item:ToDo;
    updateHandler:(id:string, value:string)=>void;
    deleteHandler:(id:string)=>void;
    index:number;
}

export class ToDoItem extends React.PureComponent<IToDoItemProps> {

    render():ReactElement {
        const {
            props:{
                item,
                updateHandler,
                deleteHandler,
                index
            }
        }=this;

        console.log("render ToDoItem classes");
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
    }
}