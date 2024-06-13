
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import Aboutus from './pages/Aboutus';
import Delivery from './pages/Delivery';
import Contactus from './pages/Contactus';
import Product from './pages/Product';
import CustomizedCake from './pages/CustomizedCake';
import ProductView from './pages/ProductView';

function App() {


  return (
    <>
    <NavbarComponent/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/delivery' element={<Delivery/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/custom/cakes' element={<CustomizedCake/>}/>
    <Route path='/view/products/:category' element={<ProductView/>}/>
    
    </Routes>
     <FooterComponent/>
       
    </>
  )
}

export default App
