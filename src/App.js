import React from 'react';
import Home from './Router/home/home.component';
import NavBar from './Router/navigation/nav.component';
import SignIn from './Router/sign-in/sign-in.component';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function Shop() {
  return (
    <div><h1>Hello this is SHOP</h1></div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>

      </Routes>

    </Router>
  )
}
