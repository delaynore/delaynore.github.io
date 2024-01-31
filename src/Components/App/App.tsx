import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { categoryIds } from '../../utils';
import { NewsApi } from '../../types';
import './App.css';

export const App = () => {
  const [articleId, setArticleId] = React.useState<number | null>(null);
  const [category, setCategory] = React.useState<string>('index');
  const [articles, setArticles] = React.useState<NewsApi>({ items: [], categories: [], sources: [] });
  const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setArticleId(null);
    const category = e.currentTarget.dataset.href;
    if (category) setCategory(category);
  };

  React.useEffect(() => {
    fetch('http://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
      .then((response) => response.json())
      .then((response: NewsApi) => {
        setArticles(response);
      });
  }, [category]);

  const onArticleClick = (id: number) => {
    setArticleId(id);
  };

  return (
    <>
      <header className={`header ${articleId !== null ? 'header--article-page' : ''}`}>
        <div className="container">
          <Navigation
            placement="header"
            className="header__navigation"
            onNavClick={onNavClick}
            currentCategory={category}
          />
        </div>
      </header>
      <main className="main">
        {articleId !== null ? (
          <ArticleItem
            id={articleId}
            categories={articles.categories}
            sources={articles.sources}
            onRelatedArticleClick={onArticleClick}
          />
        ) : (
          <Articles articles={articles} onArticleClick={onArticleClick} />
        )}
      </main>
      <footer className="footer">
        <div className="container">
          <Navigation
            placement="footer"
            className="footer__navigation"
            onNavClick={onNavClick}
            currentCategory={category}
          />
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
