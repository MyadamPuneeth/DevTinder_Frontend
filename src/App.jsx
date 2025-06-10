import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/feed';
import Profile from './components/profile';
import Connections from './components/connections';
import Requests from './components/requests';

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
                <Route path='/profile' element={<Profile />} />
                <Route path='/connections' element={<Connections />} />
                <Route path='/requests' element={<Requests />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </>
    )
  }

export default App