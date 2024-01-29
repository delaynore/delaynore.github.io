
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
                    <nav className='navigation grid header__navigation'>
                        <a href='./index.html' className='navigation__logo'>
                            <img className='navigation__image' src='/images/logo.svg' alt='logo' />
                        </a>
                        <ul className='navigation__list'>
                            {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
                                return <li key={item} className='navigation__item'>
                                    <a onClick={onNavClick}
                                        data-href={item}
                                        href='#'
                                        className={`${(item === category ? 'navigation__link-active ' : '')}navigation__link`}
                                    >
                                        {category_names[item]}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
            <main className='main'>
                <section className='articles'>
                    <div className='container grid'>
                        <section className='articles__big-column'>
                            {articles.items.slice(0, 3).map((item) => {
                                return (
                                    <article className="main-article" key={item.id} >
                                        <div className="main-article__image-container">
                                            <img className="main-article__image" src={item.image || 'https://placehold.co/600x400?text=Not\\nFound'} alt="image" />
                                        </div>
                                        <div className="main-article__content">
                                            <span className="article-category main-article__category">{articles.categories.find(e => e.id === item.category_id).name}</span>
                                            <h2 className="main-article__title">{item.title}</h2>
                                            <p className="main-article__text">
                                                {item.description}
                                            </p>
                                            <span className="article-source main-article__source">{articles.sources.find(e => e.id === item.source_id).name}</span>
                                        </div>
                                    </article>
                                )
                            })}
                        </section>
                        <section className='articles__small-column'>
                            {articles.items.slice(3, 12).map((item) => {
                                return (
                                    <article className="small-article" key={item.id}>
                                        <h2 className="small-article__title">{item.title}</h2>
                                        <p className="small-article__caption">
                                            <span className="article-date small-article__date">{new Date(item.date).toLocaleDateString('ru-RU', { month: 'long', day: '2-digit' })}</span>
                                            <span className="article-source small-article__source">{articles.sources.find((e) => e.id === item.source_id).name}</span>
                                        </p>
                                    </article>
                                )
                            })}
                        </section>
                    </div>
                </section>
            </main>
            <footer className='footer'>
                <div className='container'>
                    <nav className='navigation grid footer__navigation'>
                        <a href='./index.html' className='navigation__logo'>
                            <img className='navigation__image' src='/images/logo.svg' alt='logo' />
                        </a>
                        <ul className='navigation__list'>
                            {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
                                return <li key={item} className='navigation__item'>
                                    <a onClick={onNavClick}
                                        data-href={item}
                                        href='#'
                                        className={`${(item === category ? 'navigation__link-active ' : '')}navigation__link`}
                                    >
                                        {category_names[item]}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </nav>
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
