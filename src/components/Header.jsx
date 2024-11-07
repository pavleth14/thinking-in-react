import { Link } from 'react-router-dom'; // Import Link component

const Header = () => {
  return (
    <div className='headerDiv'>

    <h1>Logo</h1>
    
    <ul className='ulHeader'>
      <li>
        <Link className='headerLink' to="/">Home</Link> {/* Link to the Home route */}
      </li>
      <li>
        <Link className='headerLink' to="/total-price">Total Price</Link> {/* Link to the TotalPrice route */}
      </li>
    </ul>
    </div>
  );
};

export default Header;
