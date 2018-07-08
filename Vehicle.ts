export class Vehicle
{
    private regNo:string;
    private make:string;
    private model:string;
    private bodyType:string;
    private mfgYear:number;
    private insuranceNo:number;

    constructor(prno:string,pmake:string,pmodel:string,
        ptype:string,pyear:number)
    {
          this.regNo=prno;
          this.make=pmake;
          this.model=pmodel;
          this.bodyType=ptype;
          this.mfgYear=pyear;
    }

    //getter method
     get REGNO():string{
         return this.regNo;
     }
    get MAKE():string
    {
        return this.make;
    } 


    //setter method 

    set INSURANCENO(value:number)
    {
        this.insuranceNo=value;
    }

    get INSURANCENO():number
    {
        return this.insuranceNo;
    }

}

