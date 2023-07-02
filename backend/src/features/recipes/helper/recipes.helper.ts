import { IOrderBy } from "../../../types/IOrderBy";

export function orderByOptions(option?: string): IOrderBy[] {
    let orderByObj: IOrderBy[] = [];

    if (option == undefined) return orderByObj;
    switch (option) { 
        case "titleAsc":
            orderByObj.push({
                title: "asc"
            });
            break;

        case "titleDesc":
            orderByObj.push({
                title: "desc"
            });
            console.log("ok");
            break;

        case "createdAsc":
            orderByObj.push({
                created_at: "asc"
            });
            break;

        case "createdDesc":
            orderByObj.push({
                created_at: "desc"
            });
            break;

        case "updatedAsc":
            orderByObj.push({
                updated_at: "asc"
            });
            break;

        case "updatedDesc":
            orderByObj.push({
                updated_at: "desc"
            });
            break;
    }
    return orderByObj;
}