import { useState } from 'react'
import Navbar from './Navbar'
import Body from './body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App