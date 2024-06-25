import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <main>
      {/* <div className='max-w-sm mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl'>
        <div className='p-8'>
          <h1 className='text-2xl font-bold text-gray-900'>ToDo List</h1>
          <h2 className='mt-2 text-gray-600'>What do you want to do today?</h2>
          <form action='default'>
            <input
              type='text'
              placeholder='Writes...'
              className='rounded-xl shadow-xl py-2 px-4 m-2'
            />
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
              Add new task
            </button>
          </form>
        </div>
      </div> */}
      <div>
        <TodoList />
      </div>
    </main>
  )
}
