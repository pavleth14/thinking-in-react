import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import router
import './App.css';
import RowsAndProducts from "./components/RowsAndProducts";
import FilterProducts from './components/FilterProducts';
import Header from './components/Header';
import TotalPrice from './components/TotalPrice';

const App = () => {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  const [filteredProducts, setFilteredProducts] = useState(null);

  const handleFilteredProducts = (newProducts) => {
    setFilteredProducts(newProducts);
  };

  return (
    <Router>
      <div>
        <Header /> {/* Navigation links */}
        
        <Routes>
          {/* Define the routes */}
          <Route
            path="/"
            element={
              <>
                <FilterProducts
                  products={PRODUCTS}
                  handleFilteredProducts={handleFilteredProducts}
                />
                <RowsAndProducts
                  products={filteredProducts ? filteredProducts : PRODUCTS}
                />
              </>
            }
          />
          <Route path="/total-price" element={<TotalPrice />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
