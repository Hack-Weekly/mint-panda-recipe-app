import { IFilterByDate } from "../../../types/IFilterByDate";

export function orderByOptions(orderBy: string = "", precedence?: string): Record<string, string> {
    let orderByObj: Record<string, string> = {};
    
    if(precedence == "asc" || precedence == "desc") {
        orderByObj[getOrder(orderBy)] = precedence;
    }
    
    return orderByObj;
}

function getOrder(orderBy?: string): string {
    switch (orderBy) { 
        case "title":
        case "created_at":
        case "updated_at":
            return orderBy;
        
        default:
            return "id";
    }
}

export function dateStringToDateObject(fromDate: string, toDate:string): IFilterByDate | undefined {
    return (isNaN(Date.parse(toDate)) || isNaN(Date.parse(fromDate))) ? undefined : { lte: new Date(toDate), gte: new Date(fromDate) };
}