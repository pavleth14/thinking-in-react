import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice, resetPrice } from "../features/totalPriceSlice";


const RowsAndProducts = ({ products }) => {

    const dispatch = useDispatch();

    const totalPrice = useSelector((state) => state.totalPrice.totalPrice);

    let prevRow = null;    

    const handleTotalPrice = (itemPrice) => {
        let num = parseInt(itemPrice.replace('$', ''));        
        // setTotalPrice(prev => prev + num);
        dispatch(setTotalPrice(num));
    }

    const handleResetPrice = () => {
        dispatch(resetPrice());
    }

    return (
        <div>
            {products.map((item, index) => {
                if (item.category !== prevRow) {
                    prevRow = item.category;
                    return (
                        <div key={index}>
                            <h1>{prevRow}</h1>
                            <div className="flexDiv">
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <button onClick={() => handleTotalPrice(item.price)}>Add item</button>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="flexDiv" key={index}>
                        <p>{item.name}</p>
                        <p>{item.price} $</p>
                        <button onClick={() => handleTotalPrice(item.price)}>Add item</button>
                    </div>
                )
            })}
            Total Price: {totalPrice}
            <div>
                <button onClick={handleResetPrice}>resetPrice</button>
            </div>
        </div>
    );
}

export default RowsAndProducts;