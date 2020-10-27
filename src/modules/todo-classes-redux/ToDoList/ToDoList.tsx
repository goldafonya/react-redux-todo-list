import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { RouteComponentProps } from "@reach/router";
import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { todoActions } from "../../../reducers/toDoSlice";
import { RootState } from "../../../store/store";
import { ToDoItem } from "../ToDoItem/ToDoItem";

const styles={
    paper: {
        padding: "14px",
    },
};

interface IToDoListProps {
    ids:string[],
    createToDo:()=>void;
}

class ToDoList extends React.Component<IToDoListProps & WithStyles<typeof styles> & RouteComponentProps> {

    render():ReactElement {
        const {
            props:{
                classes,
                ids,
                createToDo
            },
        }=this;

        console.log("render ToDoList classes redux, date:",new Date().toISOString());
        return (
            <Paper className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                ToDo on classes Redux
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
                    onClick={()=>createToDo()}
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
const ToDoListConnector=connect((store:RootState)=>({
    ids:store.todo.map(todo=>todo.id)
}),
{
    createToDo:todoActions.createToDo
})(ToDoListStyle);

export { ToDoListConnector as ToDoList };

