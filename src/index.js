import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import  Product  from './component/Product';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './component/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
  <Navbar />
    
   <Routes>

   <Route path = "/" element = {<Home />}/>
   <Route path='/products' element = {<Products/>}/>
   <Route path='/product/:id' element = {<Product/>}/>
   
   <Route path='/cart' element = {<Cart/>}/>
   </Routes>
      </Provider>
  </ BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
