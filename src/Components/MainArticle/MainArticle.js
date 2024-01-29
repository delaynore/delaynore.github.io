import React from 'react';
import './MainArticle.css';

export const MainArticle = ({ title, description, image, source, category }) => {
    return (
        <article className="main-article">
            <div className="main-article__image-container">
                <img className="main-article__image" src={image || 'https://placehold.co/600x400?text=Not\\nFound'} alt="image" />
            </div>
            <div className="main-article__content">
                <span className="article-category main-article__category">{category}</span>
                <h2 className="main-article__title">{title}</h2>
                <p className="main-article__text">
                    {description}
                </p>
                <span className="article-source main-article__source">{source}</span>
            </div>
        </article>
    )
}