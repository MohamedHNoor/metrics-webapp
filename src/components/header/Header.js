import React from 'react';
import { LeftOutlined, SettingOutlined } from '@ant-design/icons';
import { FaMicrophone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <header className="header-container">
      <NavLink to="/" className="left-nav">
        <div>
          <LeftOutlined className="arrow" />
        </div>
      </NavLink>
      <h2>{children}</h2>
      <div className="right-nav">
        <FaMicrophone className="mic" />
        <SettingOutlined className="setting" />
      </div>
    </header>
  );
};

export default Header;
