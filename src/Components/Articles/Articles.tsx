import React, { FC } from 'react';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import { MainArticle } from '../MainArticle/MainArticle';
import './Articles.css';
import { NewsApi } from '../../types';

interface Props {
  articles: NewsApi;
  onArticleClick: (id: number) => void;
}

export const Articles: FC<Props> = ({ articles, onArticleClick }) => {
  return (
    <section className='articles'>
      <div className='container grid'>
        <section className='articles__big-column'>
          {articles.items.slice(0, 3).map((item) => {
            const category = articles.categories.find((e) => e.id === item.category_id);
            const source = articles.sources.find((e) => e.id === item.source_id);
            return (
              <MainArticle
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                category={category?.name || ''}
                source={source?.name || ''}
                onClick={() => onArticleClick(item.id)}
              />
            );
          })}
        </section>
        <section className='articles__small-column'>
          {articles.items.slice(3, 12).map((item) => {
            const source = articles.sources.find((e) => e.id === item.source_id);
            return (
              <SmallArticle
                onClick={() => onArticleClick(item.id)}
                key={item.id}
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
