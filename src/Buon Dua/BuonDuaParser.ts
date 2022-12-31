import {
    Chapter,
    ChapterDetails,
    Tag,
    HomeSection,
    LanguageCode,
    Manga,
    MangaStatus,
    MangaTile,
    TagSection,
    HomeSectionType,
    RequestManager
} from 'paperback-extensions-common';

import { CheerioAPI } from 'cheerio';

export async function parseGalleryData(id: string, requestManager: RequestManager, cheerio: CheerioAPI): Promise<any> {
}

export async function getPages(id: string, requestManager: RequestManager, cheerio: CheerioAPI): Promise<string[]> {
    throw new Error("Not Implemented");
}

export async function getSearchData(query: string | undefined, page: number, requestManager: RequestManager, cheerio: CheerioAPI): Promise<[MangaTile[], boolean]> {
    throw new Error("Not Implemented");
}