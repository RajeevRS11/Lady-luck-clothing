import React from 'react';
import Home from './Router/home/home.component';
import NavBar from './Router/navigation/nav.component';
import Authentication from './Router/authentication/authentication.component';
import Shop from './Router/shop/shop.component';
import Checkout from './Router/checkout/checkout.component';
import { 
  Routes,
  Route
} from 'react-router-dom';


export default function App() {
  return (
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />

        </Route>


      </Routes>
  )
}
