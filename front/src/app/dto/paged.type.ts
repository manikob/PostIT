
export type Paged<T> = {
    content: T[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
        sort: Sort;
    };
    sort: Sort;
    size: number;
    totalElements: number;
    totalPages: number;
};

interface Sort {
    sorted: boolean;
    unsorted: boolean;
}
