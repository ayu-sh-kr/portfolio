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

declare interface TagStyle {
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    p: string
}

declare interface TagBase {
    base: string,
    font: string
}

declare type Tag = TagBase & TagStyle

declare interface AppStyle {
    tag: Tag
}