import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import Box from "@mui/material/Box";
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";
import { useState } from "react";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>

            <Box sx={{
                width: 330,
            }}>
            <TextField
                fullWidth
                id="fullWidth"
                label="New To-Do"
                variant="standard"  
                onChange={handleChange}
                value = {text}
                InputProps = {{
                    endAdornment: 
                    <InputAdornment position="end">
                    <IconButton
                      aria-label="create Todo"
                      edge="end"
                      type="submit"
                    >
                      <Create />
                    </IconButton>
                  </InputAdornment>
                }}
            />
            </Box>
            
            </form>
        </ListItem>
    );
}

