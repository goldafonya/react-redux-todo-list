import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { ReactElement } from "react";
import { connect, ConnectedProps } from "react-redux";
import { todoActions } from "../../../reducers/toDoSlice";
import { RootState } from "../../../store/store";

type IToDoItemProps = {id:string} & ConnectedProps<typeof connector>

class ToDoItem extends React.PureComponent<IToDoItemProps> {

    render():ReactElement {
        const {
            props:{
                item,
                updateToDoById,
                deleteToDo,
                index
            }
        }=this;

        console.log("render ToDoItem classes redux");
        return (
            <ListItem>
                <div style={{marginRight:"4px"}}>{index+1}</div>
                <TextField
                    id={item.id}
                    value={item.text}
                    onChange={(e)=>updateToDoById({id:item.id, value:e.target.value})}
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
    }
}

const connector=connect((store:RootState,props:{id:string})=>{
    const id = props.id;
    const index = store.todo.findIndex(todo=>todo.id===id);

    return {
        index,
        item:store.todo[index]
    };
},
{
    updateToDoById:todoActions.updateToDoById,
    deleteToDo:todoActions.deleteToDo
});

const ToDoConnector = connector(ToDoItem);

export { ToDoConnector as ToDoItem };
