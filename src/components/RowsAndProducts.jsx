const RowsAndProducts = ({ products }) => {

    let prevRow = null;

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
                                <p>{item.price} $</p>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="flexDiv" key={index}>
                        <p>{item.name}</p>
                        <p>{item.price} $</p>
                    </div>
                )
            })}
        </div>
    );
}

export default RowsAndProducts;