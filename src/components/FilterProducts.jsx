import { useState } from "react";

const FilterProducts = ({products, handleFilteredProducts}) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (e) => {
        
        const checked = e.target.checked;
        setIsChecked(checked);

        const filteredProducts = checked ? products.filter(item => item.stocked) : products;

        handleFilteredProducts(filteredProducts);

    }

    return ( 
        <div>
            <label>Show only existing products</label>
            <input onChange={handleInputChange}
            type="checkbox" 
            checked={isChecked}
            />
        </div>
     );
}
 
export default FilterProducts;