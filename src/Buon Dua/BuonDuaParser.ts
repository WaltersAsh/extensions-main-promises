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
import entities = require('entities');

export const parseHomeSections = ($: CheerioAPI, sectionCallback: (section: HomeSection) => void): void => {
    const hotAlbumsSection = createHomeSection({ id: 'hot_albums', title: 'Hot Albums', view_more: true, type: HomeSectionType.singleRowLarge });
    const hotAlbums: MangaTile[] = [];

    const albumCoverGroups = $('div.blog').toArray();

    for (const albumCoverGroup of albumCoverGroups) {
        const albumCovers = $('div.items-row', albumCoverGroup).toArray();

        for (const albumCover of albumCovers) {
            const image = $('img', albumCover).first().attr('src') ?? '';
            const title = $('img', albumCover).first().attr('alt') ?? '';
            const id = $('a', albumCover).attr('href')?.replace(/\/$/, '')?.split('/').pop() ?? '';

            if (!id || !title) continue
            hotAlbums.push(createMangaTile({
                id: id,
                image: image ? image : 'https://i.imgur.com/GYUxEX8.png',
                title: createIconText({text: entities.decodeHTML(title)})
            }));
        }
    }

    hotAlbumsSection.items = hotAlbums;
    sectionCallback(hotAlbumsSection);
}

export async function parseGalleryData(id: string, requestManager: RequestManager, cheerio: CheerioAPI): Promise<any> {
}

export async function getPages(id: string, requestManager: RequestManager, cheerio: CheerioAPI): Promise<string[]> {
    throw new Error("Not Implemented");
}

export async function getSearchData(query: string | undefined, page: number, requestManager: RequestManager, cheerio: CheerioAPI): Promise<[MangaTile[], boolean]> {
    throw new Error("Not Implemented");
}