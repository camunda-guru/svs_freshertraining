
import {Vehicle} from './Vehicle'

//object creation 

var obj =new Vehicle("TN-02-3456","Honda",
"ivtec","sedan",2017);
console.log(obj.REGNO,"-->", obj.MAKE);
obj.INSURANCENO=345834;
console.log("Insurance No",obj.INSURANCENO);