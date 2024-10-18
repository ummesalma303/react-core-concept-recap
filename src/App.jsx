import './App.css'
import Count from './Count'
import Post from './Post'
import Product from './Product'

function App() {
  const info = {
    message: 'this is a message',
    phone:123454678
  }

  return (
    <>
      <Count></Count>
    <Product info={info}></Product>
     <div>
    <h3>React Core Concepts Recap</h3>
    <ol>
      <li>Component</li>
      <li>JSX</li>
      <li>Props</li>
      <li>event Handler</li>
      <li>State</li>
      <li>Load Data</li>
    </ol>
      </div>

      <Post></Post>
    </>
  )
}

export default App
