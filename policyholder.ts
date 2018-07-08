import { Owner } from "./owner";
import { Policy } from "./policy";
//inheritance
class PolicyHolder extends Owner
{
   policy:Policy; //has relationship
   notification:string;
   constructor(fname:string,lname:string,dob:Date,addr:string,ppolicy:Policy,notify:string)
   {
       super(fname,lname,dob,addr);
       this.policy=ppolicy;
       this.notification=notify;
   }


}

var obj=new PolicyHolder("Amit","Shah",new Date(1980,2,2),"Mumbai",
new Policy(2645263,328453258,new Date(2017,1,1),
new Date(2022,1,1),24524),"Welcome");
Policy.terms="I agree to LIC terms & conditions"
//display results
console.log("Owner Details...");
console.log(obj.firstName,"-->",obj.lastName);
console.log("Policy Details.....");
//static method
console.log(Policy.getTerms());
console.log(obj.policy.policyNo,"--->",obj.policy.insuredAmount);
console.log("Policy Holder Details....");
console.log(obj.notification);



