import { categoryNames } from "./utils.js"

export const Navigation = ({ onNavClick, currentCategory, className = '', placement = 'header' }) => {
    return (
        <nav className={`navigation grid navigation--${placement} ${className}`}>
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
                            {categoryNames[item]}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}