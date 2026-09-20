import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const fetchUser = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch user')
        }

        const data = await response.json()

        if (!cancelled) {
          setUser(data)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    if (id) {
      fetchUser()
    }

    return () => {
      cancelled = true
    }
  }, [id])

  if (loading) {
    return (
      <div className="user-detail">
        <div className="loading-skeleton">
          <div className="skeleton-avatar-large"></div>
          <div className="skeleton-info-large">
            <div className="skeleton-line skeleton-name-large"></div>
            <div className="skeleton-line skeleton-email-large"></div>
            <div className="skeleton-line skeleton-detail"></div>
            <div className="skeleton-line skeleton-detail"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="user-detail">
        <div className="error-message">
          <p>Error: {error}</p>
          <Link to="/users" className="back-link">
            Back to Directory
          </Link>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="user-detail">
        <p className="empty-state">User not found.</p>
        <Link to="/users" className="back-link">
          Back to Directory
        </Link>
      </div>
    )
  }

  return (
    <div className="user-detail">
      <Link to="/users" className="back-link">
        ← Back to Directory
      </Link>
      <div className="user-detail-card">
        <div className="user-avatar-large">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="user-detail-info">
          <h2 className="user-detail-name">{user.name}</h2>
          <p className="user-detail-email">{user.email}</p>
          <div className="user-detail-section">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
          <div className="user-detail-section">
            <h3>Address</h3>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
          </div>
          <div className="user-detail-section">
            <h3>Company</h3>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>BS:</strong> {user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail