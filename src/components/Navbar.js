import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">영화 목록</Link></li>
        <li><Link to="/tv">TV 프로그램</Link></li>
        <li><Link to="/chart">차트</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;