import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/feed';

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <Provider store={appStore}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Body />}>
                <Route path='/' element={<Feed />} />
                <Route path='/login' element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </>
    )
  }

export default App