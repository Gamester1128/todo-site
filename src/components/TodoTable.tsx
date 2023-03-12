import { TodoEntry, TodoList } from 'src/data/TodoDataType'

type Props = {
    todoList: TodoList
}

function TodoTable(props: Props) {
    const { todoList } = props
    const test: TodoEntry[] = todoList

    function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>, i: number) {
        console.log(e)
    }

    const tableRows = test.map((value, i) => {
        return (
            <tr key={value.title}>
                <td>
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckbox(e, i)}
                        checked={value.done}
                    />
                </td>
                <td>{value.title}</td>
                <td>{value.description}</td>
            </tr>
        )
    })
    return (
        <table>
            <tr>
                <th>Done</th>
                <th>Title</th>
                <th>Description</th>
            </tr>
            {tableRows}
        </table>
    )
}

export default TodoTable
