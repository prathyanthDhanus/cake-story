import { useState,useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import { Suspense,lazy } from 'react';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import Aboutus from './pages/Aboutus';
import Delivery from './pages/Delivery';
import Contactus from './pages/Contactus';
import Product from './pages/Product';
import CustomizedCakes from './pages/CustomizedCake';
import ProductView from './pages/ProductView';
import Spinner from './components/Loader';



function App() {
  const Home = lazy(() => import('./pages/Home'));
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 8 seconds
    }, 5000);

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
    <Suspense fallback={<Spinner/>}>
    <NavbarComponent/>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/delivery' element={<Delivery/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/custom/cakes' element={<CustomizedCakes/>}/>
    <Route path='/view/products/:category' element={<ProductView/>}/>
    
    </Routes>
     <FooterComponent/>
    </Suspense>
     {/* Conditionally render the spinner */}
    </>
  )
}

export default App
