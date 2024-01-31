import React, { FC } from 'react';
import { categoryNames } from '../../utils';
import './Navigation.css';
import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  className?: string;
  placement: 'header' | 'footer';
}

export const Navigation: FC<Props> = ({ className = '', placement = 'header' }) => {
  const location = useLocation();
  return (
    <nav className={`navigation grid navigation--${placement} ${className}`}>
      <NavLink to="/" className="navigation__logo">
        <img className="navigation__image" src={logo} alt="logo" />
      </NavLink>
      <ul className="navigation__list">
        {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
          return (
            <li key={item} className="navigation__item">
              <NavLink
                to={`/${item}`}
                activeClassName="navigation__link-active"
                className="navigation__link"
                isActive={(match) => {
                  if (match) return true;
                  if (item === 'index' && location.pathname === '/') return true;
                  return false;
                }}
              >
                {categoryNames[item]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
