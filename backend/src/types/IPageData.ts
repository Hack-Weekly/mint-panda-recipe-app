export interface IPageMetaData {
    page: number,
    pageSize: number,
    totalItemsCount: number,
    totalPageCount: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
}

export interface IPageList<T> {
    results: T[]
    pageData: IPageMetaData
}