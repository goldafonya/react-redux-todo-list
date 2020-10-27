import React, { ReactElement } from "react";
import { ToDo } from "../../../models/IToDo";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { RouteComponentProps } from "@reach/router";

const styles={
    paper: {
        padding: "14px",
    },
};

type IToDoListProps = WithStyles<typeof styles> & RouteComponentProps;
type IToDoListState={list:Array<ToDo>};

class ToDoList extends React.Component<IToDoListProps,IToDoListState> {
    constructor(props:IToDoListProps) {
        super(props);

        this.state={list:[]};
    }

    addToDo=():void=>{
        this.setState((prevState)=>({list:prevState.list.concat([new ToDo()])}));
    };

    deleteToDo=(id:string):void=>{
        this.setState((prevState)=>({list:prevState.list.filter(todo=>todo.id!==id)}));
    };

    updateToDoById=(id:string,value:string):void=>{

        this.setState(prevState=>({
            list:prevState.list.map(todo=>{
                if (todo.id===id) {
                    return {...todo,text:value};
                }
                return todo;
            })
        })
        );
    };

    render():ReactElement {
        const {
            props:{
                classes
            },
            state:{
                list
            },
            addToDo,
            deleteToDo,
            updateToDoById
        }=this;

        console.log("render ToDoList classes, date:",new Date().toISOString());
        return (
            <Paper className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                ToDo on classes
                </Typography>
                <List>
                    {list.map((todo,index)=>(
                        <ToDoItem
                            key={todo.id}
                            index={index}
                            item={todo}
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
    }
}

const ToDoListStyle = withStyles(styles)(ToDoList);

export {  ToDoListStyle as ToDoList};
