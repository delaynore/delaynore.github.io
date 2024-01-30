export interface NewsApi {
    sources: Source[];
    categories: Category[];
    items: Article[];
}

export interface ArticleItemApi {
    id: number;
    lang: string;
    date: string;
    title: string;
    description: string;
    image: string;
    link: string;
    author: string;
    text: string;
    category: Category;
    source: Source;
}

export interface RelatedArticlesApi {
    items: Article[];
}

export interface Source {
    id: number;
    name: string;
    // site: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Article {
    id: number;
    lang: string;
    date: string;
    title: string;
    description: string;
    image: string;
    source_id: number;
    category_id: number;
}
