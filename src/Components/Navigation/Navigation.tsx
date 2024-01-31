import React, { FC } from 'react';
import { categoryNames } from '../../utils';
import './Navigation.css';
import logo from '../../images/logo.svg';

interface Props {
  currentCategory: string;
  className?: string;
  placement: 'header' | 'footer';
  onNavClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Navigation: FC<Props> = ({ onNavClick, currentCategory, className = '', placement = 'header' }) => {
  return (
    <nav className={`navigation grid navigation--${placement} ${className}`}>
      <a data-href="index" href="#" className="navigation__logo">
        <img className="navigation__image" src={logo} alt="logo" />
      </a>
      <ul className="navigation__list">
        {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
          return (
            <li key={item} className="navigation__item">
              <a
                onClick={onNavClick}
                data-href={item}
                href="#"
                className={`${item === currentCategory ? 'navigation__link-active ' : ''}navigation__link`}
              >
                {categoryNames[item]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
