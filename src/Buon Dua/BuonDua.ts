import {
    Source,
    Manga,
    Chapter,
    ChapterDetails,
    HomeSection,
    SearchRequest,
    PagedResults,
    Section,
    SourceInfo,
    TagSection,
    TagType,
    Request,
    RequestManager,
    ContentRating,
    Response,
    MangaStatus,
    LanguageCode
} from 'paperback-extensions-common'

export const buonduaInfo: SourceInfo = {
    version: '1.0.1',
    name: 'Buon Dua',
    icon: 'icon.png',
    author: 'WaltersAsh',
    description: 'Extension to grab albums from Buon Dua',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: 'https://buondua.com/',
    sourceTags: [{
        text: '18+',
        type: TagType.RED
    }]
}

export class buondua extends Source {
    readonly requestManager: RequestManager = createRequestManager({
        requestsPerSecond: 3,
        requestTimeout: 15000,
        interceptor: {
            interceptRequest: async (request: Request): Promise<Request> => {
                request.headers = {
                    ...(request.headers ?? {}),
                    ...{
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                        'referer': 'https://buondua.com/'
                    }
                }
                return request
            },
            interceptResponse: async (response: Response): Promise<Response> => { return response }
        }
    })

    override async getHomePageSections(sectionCallback: (section: HomeSection) => void): Promise<void> {
        throw new Error("Not Implemented");
    }

    override async getViewMoreItems(homepageSectionId: string, metadata: any): Promise<PagedResults> {
        throw new Error("Not Implemented");
    }

    async getMangaDetails(mangaId: string): Promise<Manga> {
        throw new Error("Not Implemented");
    }

    async getChapters(mangaId: string): Promise<Chapter[]> {
        throw new Error("Not Implemented");
    }

    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
        throw new Error("Not Implemented");
    }

    override async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
        throw new Error("Not Implemented");
    }
}