export class Owner
{
    //public data members
    firstName:string;
    lastName:string;
    dob:Date;
    address:string;
    constructor(fname:string,lname:string,dob:Date,addr:string)
    {
        this.firstName=fname;
        this.lastName=lname;
        this.dob=dob;
        this.address=addr;
    }


}