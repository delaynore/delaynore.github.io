import { Navigation } from './Navigation.js'
import { Articles } from './Articles.js';
import { categoryIds } from './utils.js';


export const App = () => {
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({ items: [], categories: [], sources: [] });
    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    }

    React.useEffect(() => {
        fetch('http://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
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
                    pla
                        className='header__navigation'
                        onNavClick={onNavClick}
                        currentCategory={category}
                    />
                </div>
            </header>
            <main className='main'>
                <Articles articles={articles} />
            </main>
            <footer className='footer'>
                <div className='container'>
                    <Navigation
                        placement='footer'
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
    )
}