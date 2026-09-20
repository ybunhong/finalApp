import { useFetch } from '../useFetch'

// This file demonstrates type safety of useFetch
// It's not meant to be run as a test, but to verify TypeScript compilation

interface User {
  id: number
  name: string
  email: string
}

// This should work - TypeScript will know data is User[] | null
const { data, error } = useFetch<User[]>('https://api.example.com/users')

// TypeScript should require null check before using data methods
if (data) {
  // This should work - TypeScript knows data is User[] here
  const names = data.map(user => user.name)
  const firstUser = data[0]
  
  // Use the variables to avoid unused warnings
  console.log('User names:', names)
  console.log('First user:', firstUser)
}

// This should fail - TypeScript knows data could be null
// const names = data.map(user => user.name) // Error: Object is possibly 'null'

// This should work - error is string | null
if (error) {
  console.log('Error:', error.toUpperCase())
}

// This should fail - error could be null
// console.log(error.toUpperCase()) // Error: Object is possibly 'null'
