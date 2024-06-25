'use client'
import { useState } from 'react'

interface Todo {
  id: number
  text: string
}

const TodoList: React.FC = () => {
  const [task, setTask] = useState<Todo[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim()) {
      const newTodo: Todo = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        text: newTask.trim()
      }
      setTask([...task, newTodo])
      setNewTask('')
    }
  }

  const handleRemoveTask = (id: number) => {
    setTask(task.filter((task) => task.id !== id))
  }

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='p-8'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>ToDo List</h1>
          <h2 className='mt-2 text-gray-500'>What do you want to do today?</h2>
        </div>
        <div className='flex justify-between'>
          <input
            type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='border rounded  py-2 px-3 text-gray-700 mt-4'
            placeholder='Write new task...'
          />
          <button
            onClick={addTask}
            className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'
          >
            Add New Task
          </button>
        </div>
        <ul className='mt-4'>
          {task.map((task) => (
            <li
              key={task.id}
              className='flex justify-between items-center mt-2'
            >
              <span>{task.text}</span>
              <button
                className='ml-4 text-red-500'
                onClick={() => handleRemoveTask(task.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
