import { useState } from 'react'
import './App.css'
import TodoTable from 'src/components/TodoTable'
import { TodoList } from 'src/data/TodoDataType'
import todoList from '../todo-data.json'

function App() {
    const [count, setCount] = useState(0)

    todoList.push({ title: 'hehe', description: 'yoyoyoy', done: true })
    return (
        <div className="app">
            <div>Todo-List App</div>
            <div>Helo THere</div>

            <TodoTable todoList={todoList} />
        </div>
    )
}
// https://developers.google.com/drive/api/quickstart/js
// https://vercel.com/docs/concepts/deployments/configure-a-build
// https://vercel.com/docs/frameworks/vite
// https://vitejs.dev/guide/static-deploy.html

export default App
