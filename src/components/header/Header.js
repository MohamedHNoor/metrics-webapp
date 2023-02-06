/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = (props) => {
  const { children } = props;
  return (
    <div className="header-container">
      <NavLink to="/">
        <div>
          <LeftOutlined />
        </div>
      </NavLink>
      <h2>{children}</h2>
      <div className="right-container">
        <p>Micorphone</p>
        <SettingOutlined className="setting" />
      </div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;

// /* eslint-disable import/no-extraneous-dependencies */
// import { NavLink } from 'react-router-dom';
// import { LeftOutlined, SettingOutlined } from '@ant-design/icons';
// import SearchBox from '../search-box/SearchBox';
// import './navbar.styles.css';

// const Navbar = (props) => (
//   <div className="header-container">
//     <div className="nav-container">
//       <NavLink to="/">
//         <div>
//           <LeftOutlined />
//         </div>
//       </NavLink>
//       <h1>{props}</h1>
//       <div className="right-container">
//         <p>Micorphone</p>
//         <SettingOutlined />
//       </div>
//     </div>
//     <SearchBox />
//   </div>
// );

// export default Navbar;
