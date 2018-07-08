import { Banking } from "./person";

class Employee implements Banking.Person{


   constructor(public firstName:string,public lastName:string)
   {

   }

   duties()
   {
     console.log("Implementing business requirements");
   }
   
  
}

var obj = new Employee("Anirudh","Kumar");