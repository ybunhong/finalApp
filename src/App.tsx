import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import NavBar from './components/common/NavBar'
import TodoApp from './components/todos/TodoApp'
import UserDirectory from './components/users/UserDirectory'
import UserDetail from './components/users/UserDetail'
import Clock from './components/common/Clock'
import NotFound from './components/common/NotFound'
import CartDemo from './components/cart/CartDemo'
import CheckoutSummary from './components/cart/CheckoutSummary'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <NavBar />
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
                <Route path="/cart" element={<CartDemo />} />
                <Route path="/checkout" element={<CheckoutSummary />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
