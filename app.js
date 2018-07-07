/*
Author:Parameswari Ettiappan
Date:6/7/2018
Description:"To understand alert method"

//alerting the user with warning

alert("Buddy learns scripting language...");

//data types
$policyNumber=3287465852; //number
$interestRate=0.89;//float
noOfUsers=100e+10;//scientific notation
activeUser=true;//boolean
$message="you are part of organization";//string
info='You must adhere to organization policy';//string
warning='You must shut down system while leaving,is n\'t it';
//to display message in console
console.log("Policy Number=",$policyNumber);
//to display in document
console.log("Messsage=",$message);
console.log("Info=",info);

*/

intRate=0;
tenure=0;
//create a function
function irCaution()
{
    //local  variable to global
    intRate=document.querySelector("#interestRate").value;
    if((intRate<10.5) || (intRate>15) )
       alert("Interest Rate should be between >10.5 and <=15",intRate);
  

}

function tenureCaution()
{
    //local variable to global
    tenure= document.querySelector("#tenure").value; 
     
    if((tenure!=3) && (tenure!=5) && (tenure!=7) )
         alert("Tenure can be 3 or 5 or 7",tenure);
}

function calculate()
{
    //alert("Form submitted..."+tenure);
    loanAmt=document.querySelector("#loanAmount").value;
    interest=Math.round(loanAmt*(intRate/100),0);
    //convert string to int
    totalAmt=parseInt(loanAmt)+interest;
    emi=totalAmt/(tenure*12);
    console.log("Monthly EMI="+emi);
    //Access result area
    resultRef=document.querySelector("#result");
    paraElement=document.createElement("p");
    textNode=document.createTextNode("MonthlyEMI="+emi);
    paraElement.appendChild(textNode);
    resultRef.appendChild(paraElement); 
    return false; 


}


