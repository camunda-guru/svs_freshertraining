export class Policy
{
    policyNo:number;
    insuredAmount:number;
    fromDate:Date;
    toDate:Date;
    premium:number;
    constructor(pno:number,insAmt:number,fdate:Date,
    tdate:Date,prem:number)
    {
        this.policyNo=pno;
        this.insuredAmount=insAmt;
        this.fromDate=fdate;
        this.toDate=tdate;
        this.premium=prem;
    }
}