
export type PricingFeatures = {
    id: string,
    feature: string,
    provided: boolean;
};

// Ghost API Data
export interface Ghost_Blogs {
    meta: Ghost_Blogs_Meta,
    posts: Ghost_Blogs_Post[];
}

export type Ghost_Blogs_Meta = {
    limit: number,
    // next: ,
    page: number,
    pages: number,
    // prev: ,
    total: number;
};

export type Ghost_Blogs_Post = {
    created_at: string,
    excerpt: string,
    feature_image: string,
    html: string,
    id: string,
    published_at: string,
    slug: string,
    title: string,
    url: string,
};
