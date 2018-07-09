//Generic class
class Template<T> //generic type
{
     data:T; //generic data
     compute:(data1:T,data2:T)=>T; //generic function    
}

var obj = new Template<number>();
obj.data=56467;
obj.compute=function(x1,x2)
{
    return Math.pow(x1,x2);
}
console.log(obj.compute(obj.data,2));

//change the type

var stringobj = new Template<string>();
stringobj.data="SVS";
stringobj.compute=function(s1,s2)
{
    return s1+s2;
}
console.log(stringobj.compute(stringobj.data,"Investments"));
