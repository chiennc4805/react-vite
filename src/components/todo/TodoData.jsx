const TodoData = (props) => { //để lấy ra props, tên tham số phải là props
    const { todoList, deleteToDo } = props;

    const handleClick = (id) => {
        deleteToDo(id)
    }

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>> check map: ", item, index)
                return (
                    <div className="todo-item" key={item.id}>
                        <div >{item.name}</div>
                        <button onClick={() => handleClick(item.id)}>
                            delete
                        </button>
                    </div>
                )
            })}
        </div>
    );
}
export default TodoData;