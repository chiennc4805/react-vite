import "./todo.css"
import TodoData from "./TodoData"
import TodoNew from "./TodoNew"
import reactLogo from '../../assets/react.svg'
import { useState } from "react"

const TodoApp = () => {
    const [todoList, setTodoList] = useState([])

    const addNewToDo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteToDo = (id) => {
        const newToDoList = todoList.filter((item) => item.id !== id)
        setTodoList(newToDoList)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewToDo={addNewToDo} //dấu () để gọi func, còn ở đây là tham chiếu
            />
            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteToDo={deleteToDo}
                />
                :
                <div className="todo-image">
                    <img src={reactLogo} />
                </div>
            }

        </div>
    )
}

export default TodoApp;