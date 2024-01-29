
const category_id = {
    index: 0,
    fashion: 3,
    technologies: 1,
    sport: 2,
    karpov: 6
}

const category_names = {
    index: 'Главная',
    fashion: 'Мода',
    technologies: 'Технологии',
    sport: 'Спорт',
    karpov: 'Karpov'
}

const MainArticle = ({ title, description, image, source, category }) => {
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
};

const SmallArticle = ({ title, date, source }) => {
    return (
        <article className="small-article">
            <h2 className="small-article__title">{title}</h2>
            <p className="small-article__caption">
                <span className="article-date small-article__date">{new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: '2-digit' })}</span>
                <span className="article-source small-article__source">{source}</span>
            </p>
        </article>
    )
};

const Navigation = ({ onNavClick, currentCategory, className = '' }) => {
    return (
        <nav className={`navigation grid ${className}`}>
            <a data-href='index' href='#' className='navigation__logo'>
                <img className='navigation__image' src='/images/logo.svg' alt='logo' />
            </a>
            <ul className='navigation__list'>
                {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
                    return <li key={item} className='navigation__item'>
                        <a onClick={onNavClick}
                            data-href={item}
                            href='#'
                            className={`${(item === currentCategory ? 'navigation__link-active ' : '')}navigation__link`}
                        >
                            {category_names[item]}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

const App = () => {
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({ items: [], categories: [], sources: [] });
    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    }

    React.useEffect(() => {
        fetch('http://frontend.karpovcourses.net/api/v2/ru/news/' + category_id[category] || '')
            .then(response => response.json())
            .then((response) => {
                setArticles(response);
            })
    }, [category]);

    return (
        <>
            <header className='header'>
                <div className='container'>
                    <Navigation
                        className='header__navigation'
                        onNavClick={onNavClick}
                        currentCategory={category}
                    />
                </div>
            </header>
            <main className='main'>
                <section className='articles'>
                    <div className='container grid'>
                        <section className='articles__big-column'>
                            {articles.items.slice(0, 3).map((item) => {
                                return (
                                    <MainArticle
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        category={articles.categories.find((e) => e.id === item.category_id).name}
                                        source={articles.sources.find((e) => e.id === item.source_id).name}
                                    />
                                )
                            })}
                        </section>
                        <section className='articles__small-column'>
                            {articles.items.slice(3, 12).map((item) => {
                                return (
                                    <SmallArticle
                                        key={item.id}
                                        title={item.title}
                                        date={item.date}
                                        source={articles.sources.find((e) => e.id === item.source_id).name}
                                    />
                                )
                            })}
                        </section>
                    </div>
                </section>
            </main>
            <footer className='footer'>
                <div className='container'>
                    <Navigation
                        className='footer__navigation'
                        onNavClick={onNavClick}
                        currentCategory={category}
                    />
                    <div className='footer__column container'>
                        <p className='footer__text'>
                            Сделано
                            <a href='https://t.me/danidoub' target='_blank' className='footer__link'>
                                Daniil Lozhkin
                            </a>
                        </p>
                        <p className='footer__copyright'>© 2023</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
