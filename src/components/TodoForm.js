import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        // e.target.value contains new input from onChange
        // event for input elements
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); // chặn trình duyệt refresh
        if (todo.task.trim()) { //xóa khoảng trắng
            addTodo({ ...todo, id: uuid() }); //tạo 1 id độc nhất cho new todo (dùng thư viện uuid)
            setTodo({ ...todo, task: "" }); //sau khi thêm thì làm trống input
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                type="text"
                name="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm
