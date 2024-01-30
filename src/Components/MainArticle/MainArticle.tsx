import React, { FC } from 'react';
import './MainArticle.css';

interface Props {
  title: string;
  description: string;
  image: string;
  source: string;
  category: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const MainArticle: FC<Props> = ({ title, description, image, source, category, onClick }) => {
  return (
    <article className='main-article' onClick={onClick}>
      <div className='main-article__image-container'>
        <img
          className='main-article__image'
          src={image || 'https://placehold.co/600x400?text=Not\\nFound'}
          alt='image'
        />
      </div>
      <div className='main-article__content'>
        <span className='article-category main-article__category'>{category}</span>
        <h2 className='main-article__title'>{title}</h2>
        <p className='main-article__text'>{description}</p>
        <span className='article-source main-article__source'>{source}</span>
      </div>
    </article>
  );
};
