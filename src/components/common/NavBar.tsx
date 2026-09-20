import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function NavBar() {
  const { user, signIn, signOut } = useAuth()

  const handleSignIn = () => {
    const email = prompt('Enter your email:')
    if (email) {
      signIn(email)
    }
  }

  return (
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
        <NavLink 
          to="/cart" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Cart
        </NavLink>
        <NavLink 
          to="/checkout" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Checkout
        </NavLink>
        <div className="auth-section">
          {user ? (
            <>
              <span className="user-greeting">Hi, {user.email}</span>
              <button onClick={signOut} className="auth-button">
                Sign out
              </button>
            </>
          ) : (
            <button onClick={handleSignIn} className="auth-button">
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
