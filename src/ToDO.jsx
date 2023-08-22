import List from '@mui/material/List';
import ToDoItem from "./ToDoItem";
import TodoForm from "./TodoForm";
import {Box, Typography} from "@mui/material";

import {useState, useEffect} from "react";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todo"))
    if(!data) return [];
    return data;
};

export default function TodoList(){
    const [todo, setTodo] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem(
            'todo',
            JSON.stringify(todo)
        )
    }, [todo]);

    const removeToDo = (id) => {
        setTodo(prevTodo => {
            return prevTodo.filter((t) => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodo(prevTodo =>{
            return prevTodo.map(todo => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            });
        });
    };

    const addTodo = (text) => {
        setTodo(prevTodo => {
            return [...prevTodo, {text: text, id: crypto.randomUUID(), completed: false}]
        });
    };

    return(
        <Box sx={{
            display : 'flex',
            justifyContent : 'center',
            flexDirection : 'column',
            alignItems : 'center',
            m: 3
        }}>
            <Typography variant="h2" component="h1" sx={{flexGrow:1}}>
                Your Tasks
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todo.map(todo => (
                <ToDoItem 
                    todo={todo} 
                    key={todo.id} 
                    remove={removeToDo}
                    toggle={()=> toggleTodo(todo.id)}
                />
            ))}

            <TodoForm addTodo={addTodo}/>

        </List>
        </Box>
    )
}

