import Header from './components/Header'
import Navbar from './components/Navbar'
import MainHeader from './components/MainHeader'
import MainHeaderText from './components/MainHeaderText'
import Category from './components/Category';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SellingProducts from './components/SellingProducts';
import Buy from './components/Buy';
import AllProducts from './components/AllProducts';
import Features from './components/Features';
import Circles from './components/Circles';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProductCopm from './components/AllProductCopm';


const App = () => {
  return <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
                <Header />
                <Navbar />
                <MainHeader />
                <MainHeaderText />
                <Category />
                <SellingProducts />
                <Buy />
                <AllProducts />
                <Features />
                <Circles />
                <Footer />
            </>
          } />
          <Route path='/all-products' element={<AllProductCopm />} />
        </Routes>
      </BrowserRouter>
      
     
      
  </>
    
  
}

export default App