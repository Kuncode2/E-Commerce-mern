import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      <Route path='/womens' element={<ShopCategory/>}/>
      <Route path='/kids' element={<ShopCategory/>}/>  
      <Route path="/product" element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>  
      </Route>   
      <Route path='/cart' element={<Cart/>}/>
      <Route path='login' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
