import { IPageList, IPageMetaData } from "../types/IPageData";

export class PageData implements IPageMetaData {
    page: number;
    pageSize: number;
    totalItemsCount: number;
    totalPageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;


    constructor(page: number, pageSize: number, totalItemsCount: number) {
        this.page = page;
        this.pageSize = pageSize;
        this.totalItemsCount  = totalItemsCount;
        this.totalPageCount = Math.ceil(totalItemsCount / pageSize);
        this.hasPreviousPage = page > 1;
        this.hasNextPage = this.totalPageCount > page;
    }
}

export class PageList<T> implements IPageList<T> {
    results: T[];
    pageData: IPageMetaData;

    private constructor(results: T[], pageData: IPageMetaData) {
        this.results = results;
        this.pageData = pageData;
    }

    static GetPageList<T>(result: T[], page: number, pageSize: number, totalItemsCount: number) : PageList<T> {
        const pageData = new PageData(page, pageSize, totalItemsCount);
        return new PageList<T>(result, pageData)
    }
}