import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function UserDirectory() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        const data = await response.json()

        if (!cancelled) {
          setUsers(data)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return (
      <div className="user-directory">
        <h2>User Directory</h2>
        <div className="loading-skeleton">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton-item">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-info">
                <div className="skeleton-line skeleton-name"></div>
                <div className="skeleton-line skeleton-email"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="user-directory">
        <h2>User Directory</h2>
        <div className="error-message">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className="user-directory">
        <h2>User Directory</h2>
        <p className="empty-state">No users found.</p>
      </div>
    )
  }

  return (
    <div className="user-directory">
      <h2>User Directory</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="user-item">
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-email">{user.email}</p>
                <p className="user-company">{user.company.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserDirectory