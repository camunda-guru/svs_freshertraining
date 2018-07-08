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