import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import FilterBar from './FilterBar'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: false },
    { id: 3, text: 'Master state management', completed: true }
  ])
  const [filter, setFilter] = useState<string>('all')

  const addTodo = (text: string) => {
    setTodos([...todos, {
      id: Date.now(),
      text,
      completed: false
    }])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="todo-app">
      <h2>Todo App</h2>
      <AddTodo onAdd={addTodo} />
      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
        completedCount={completedCount}
      />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default TodoApp
