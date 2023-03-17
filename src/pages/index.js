// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to paraMath site!</h1>
      <Link to="/about">About </Link>
      <p>Here you can find the parnormal power of Mathemattics.</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>paraMath-Home Page</title>

// Step 3: Export your component
export default IndexPage
