import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';



function App() {
  return (
    <BrowserRouter>
    <CartProvider>
       <NavBar />
   <Routes>
        <Route path='/' element={ <ItemListContainer/>} />
        <Route path='/categoria/:categoryId' element={ <ItemListContainer/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/>} />
        <Route path='/cart' element={ <Cart/>} />
        <Route path='/checkout' element={ <Checkout/>} />

        <Route path='*' element={ <h1>ERROR</h1> } />
   </Routes>
    </CartProvider>
  
     </BrowserRouter>

  );
}

export default App;
