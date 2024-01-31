import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import './App.css';

export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="container">
          <Navigation placement="header" className="header__navigation" />
        </div>
      </header>
      <main className="main">
        <Switch>
          <Route path="/article/:id">
            <ArticleItem />
          </Route>
          <Route path="/" exact>
            <Articles />
          </Route>
          <Route path="/:categoryId">
            <Articles />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <div className="container">
          <Navigation placement="footer" className="footer__navigation" />
          <div className="footer__column container">
            <p className="footer__text">
              Сделано{' '}
              <a href="https://t.me/danidoub" target="_blank" rel="noreferrer" className="footer__link">
                Daniil Lozhkin
              </a>
            </p>
            <p className="footer__copyright">© 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};
