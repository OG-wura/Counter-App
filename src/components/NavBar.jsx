import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className='navbar'>
      <ul>
        <li className={`${activeTab === 'home' ? 'active' : ''}`}>
          <Link to='/' onClick={() => setActiveTab('home')}>
            Home
          </Link>
        </li>
        <li className={`${activeTab === 'counter' ? 'active' : ''}`}>
          <Link to='/counter' onClick={() => setActiveTab('counter')}>
            Counter
          </Link>
        </li>
        <li className={`${activeTab === 'test' ? 'active' : ''}`}>
          <Link to='/test' onClick={() => setActiveTab('test')}>
            Test Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
