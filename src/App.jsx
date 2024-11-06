import {useState} from 'react';
import './App.css'
import RowsAndProducts from "./components/RowsAndProducts";
import FilterProducts from './components/FilterProducts';

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
  }

  return ( 
    <div>
      <FilterProducts products={PRODUCTS} handleFilteredProducts={handleFilteredProducts} />
        <RowsAndProducts products={filteredProducts ? filteredProducts : PRODUCTS} />
    </div>
   );
}
 
export default App;