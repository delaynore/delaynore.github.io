import React, { FC } from 'react';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import { MainArticle } from '../MainArticle/MainArticle';
import './Articles.css';
import { NewsApi } from '../../types';
import { categoryIds } from '../../utils';
import { useParams } from 'react-router-dom';

export const Articles: FC = () => {
  const { categoryId = 'index' }: { categoryId?: string } = useParams();
  const [articles, setArticles] = React.useState<NewsApi>({ items: [], categories: [], sources: [] });

  React.useEffect(() => {
    fetch('http://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[categoryId] || '')
      .then((response) => response.json())
      .then((response: NewsApi) => {
        setArticles(response);
      });
  }, [categoryId]);

  return (
    <section className="articles">
      <div className="container grid">
        <section className="articles__big-column">
          {articles.items.slice(0, 3).map((item) => {
            const category = articles.categories.find((e) => e.id === item.category_id);
            const source = articles.sources.find((e) => e.id === item.source_id);
            return (
              <MainArticle
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={category?.name || ''}
                source={source?.name || ''}
              />
            );
          })}
        </section>
        <section className="articles__small-column">
          {articles.items.slice(3, 12).map((item) => {
            const source = articles.sources.find((e) => e.id === item.source_id);
            return (
              <SmallArticle
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                source={source?.name || ''}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
