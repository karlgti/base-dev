



export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta {
    pagination: IPagination;
}

export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}



export interface IArticlesAttribute {
    blog_theme: string;
    blog_topic: string;
    blog_subject: string;
    blog_link: string;
    slug: string;
    blog_link_app: any;
    blog_image: any;
    blog_date: string;
}

export interface IArticle {
    id: number;
    attributes: IArticlesAttribute;
}

