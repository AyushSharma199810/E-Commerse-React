import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
 <>
 <Navbar />
    <BrowserRouter>
   <Routes>

   <Route path = "" element = {<Home />}/>
   </Routes>
   {/* <Products/> */}
    </BrowserRouter>
 </>
   
  );
}

export default App;
