import { SmallArticle } from './SmallArticle.js';
import { MainArticle } from './MainArticle.js';

export const Articles = ({ articles }) => {
    return (
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
    )
}