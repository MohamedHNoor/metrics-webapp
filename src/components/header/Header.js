import React from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined, SettingOutlined } from '@ant-design/icons';
import { FaMicrophone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = (props) => {
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

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
