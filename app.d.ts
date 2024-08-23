import type {ParsedContent} from "@nuxt/content";

declare type BlogBase = {
    title: string,
    description: string
    published: boolean,
    publishedOn: string
    imageSrc?: string,
    imageAlt?: string,
    topics: string[]
}


declare type Blog = BlogBase & ParsedContent
declare type ParsedContentPreview = Omit<ParsedContent, 'body' | 'excerpt'>
declare type BlogPreview = BlogBase & ParsedContentPreview