'use client'

import { CircleXIcon } from 'lucide-react'
import { useState } from 'react'
interface Todo {
  id: number
  text: string
  completed: boolean
}
export default function Home() {
  const [tasks, setTasks] = useState<Todo[]>([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTodo: Todo = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        text: newTask.trim(),
        completed: false
      }
      setTasks([...tasks, newTodo])
      setNewTask('')
    }
  }

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const handleCompletedTask = (id: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === id)
    if (taskIndex === -1) return
    const currentTasks = [...tasks]

    currentTasks[taskIndex].completed = !currentTasks[taskIndex].completed

    setTasks(currentTasks)
  }
  return (
    <main>
      <div className='max-w-xl mx-auto mt-10 p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-8'>
          <h1 className='text-2xl font-bold text-slate-300'>ToDo List</h1>
          <div className='flex justify-between mt-4'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className='block py-2 w-4/5 mt-2 px-0 text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              />
              <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                What do you want to do today?
              </label>
            </div>
            <button
              onClick={handleAddTask}
              className='mt-5 bg-blue-500 text-white px-6 rounded hover:bg-blue-700 text-xs'
            >
              Add New Task
            </button>
          </div>
          <ul className='mt-8'>
            {tasks.map(({ id, text, completed }) => (
              <li
                key={id}
                className='flex justify-between items-center mt-4 text-slate-300'
              >
                <input
                  checked={completed}
                  type='checkbox'
                  onChange={() => handleCompletedTask(id)}
                />
                <span className={completed ? 'text-green-500' : undefined}>
                  {text}
                </span>
                <button
                  className='ml-4 text-red-500 hover:text-red-400'
                  onClick={() => handleRemoveTask(id)}
                >
                  <CircleXIcon />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
