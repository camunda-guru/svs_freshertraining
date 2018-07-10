import { Component } from "../../node_modules/@angular/core";
import {FormGroup,FormBuilder,Validators,FormControl} 
from "@angular/forms";


@Component({
    templateUrl:'./app/lien/lien.component.html',
    styleUrls:['./app/lien/lien.component.css']
})
export class LienComponent
{ 
   private lientypes:string[];
   private liencompanies:string[];
   private amountFrmCtrl:FormControl;
   private branchFrmCtrl:FormControl;
   constructor()
   {
       this.lientypes=["Voluntary","Non Voluntary","Non Consensual"
    ,"Stautory","Judicial"];
    this.liencompanies=["All State","Royal Sundaram","United Insurance"
    ,"HDFC ERGO","Bajaj"];
    this. amountFrmCtrl=new FormControl('',[Validators.required,
        Validators.pattern('[0-9]{5,8}')
      ]);
      this. branchFrmCtrl=new FormControl('',[Validators.required]
      );
   }

    onLienTypeSelect(obj)
    {

    }
    onLienCompanySelect(obj)
    {

    }

}