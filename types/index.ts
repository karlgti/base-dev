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
  blog_id: number;
  blog_platform: any;
  platform_link: string;
  blog_image: any;
  blog_date: string;
}

export interface IArticle {
  id: number;
  attributes: IArticlesAttribute;
}

export interface IArt {
  id: number;
  text: string;
}

