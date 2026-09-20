import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import TodoApp from './components/todos/TodoApp'
import UserDirectory from './components/users/UserDirectory'
import UserDetail from './components/users/UserDetail'
import Clock from './components/common/Clock'
import NotFound from './components/common/NotFound'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navigation">
          <h1 className="app-title">React App</h1>
          <div className="nav-links">
            <NavLink 
              to="/todos" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Todos
            </NavLink>
            <NavLink 
              to="/users" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Users
            </NavLink>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="home">
                <h2>Welcome!</h2>
                <p>Select a page from the navigation above.</p>
                <Clock />
              </div>
            } />
            <Route path="/todos" element={<TodoApp />} />
            <Route path="/users" element={<UserDirectory />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App