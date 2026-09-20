import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="clock">
      <h3>Current Time</h3>
      <p className="time-display">{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock