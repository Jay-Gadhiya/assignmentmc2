import logo from './logo.svg';
import './App.css';
import { ProductCard } from './Components/Card';
import { Route, Routes } from 'react-router';
import { ProductListingPage } from './Pages/ProductListing/ProductListing';
import { CartPage } from './Pages/Cart/Cart';

function App() {
  return (
    <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
