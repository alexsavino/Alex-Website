import React from 'react';
import NavBar from './NavBar';

const NavBarLayout = ({ children }) => {
  return (
    <div>
      <div className="navBar">
        {/* <p>SO WEIRD</p> */}
        <NavBar />
      </div>
      {/* <div className="content">
        {children}
      </div> */}
    </div>
  );
};

export default NavBarLayout;