export module Banking
{
export interface Person
{
    firstName:string;
    lastName:string;
    dob?:string; //optional
    duties:Function;
    isLate?:Function; //optional
}

export interface RBI
{
    fd:Function;
}
}