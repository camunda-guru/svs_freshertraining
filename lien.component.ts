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
   private refNoFrmCtrl:FormControl;
   private startDateFrmCtrl:FormControl;
   private endDateFrmCtrl:FormControl;
   private lienForm:FormGroup;
   private isExpanded:boolean=false;
   private selectedLienType:string;
   private selectedLienCompany:string;
   constructor(private formBuilder:FormBuilder)
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
      this.refNoFrmCtrl=new FormControl('',[Validators.required]
    );
    this.startDateFrmCtrl=new FormControl('',[Validators.required]
);
this.endDateFrmCtrl=new FormControl('',[Validators.required]
);

       this.lienForm=formBuilder.group({
          amount:this.amountFrmCtrl,
          branch:this.branchFrmCtrl,
          refNo:this.refNoFrmCtrl,
          startDate:this.startDateFrmCtrl,
          endDate:this.endDateFrmCtrl
       });

   }

    onLienTypeSelect(obj)
    {
       this.selectedLienType=obj.value        
    }
    onLienCompanySelect(obj)
    {
         this.selectedLienCompany=obj.value
    }

    save()
    {
        this.isExpanded = !this.isExpanded;
        console.log(this.lienForm.value);
    }

}