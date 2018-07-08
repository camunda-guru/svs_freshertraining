var sharesData:any[][]=[
    
    [
       {
           "companyName":"HCL",
           "sharePrice":456.78
       },
       {
        "companyName":"INFY",
        "sharePrice":1456.78
    },
    {
        "companyName":"WIPRO",
        "sharePrice":856.78
    }

    ],

    [
        {
            "companyName":"HCL",
            "sharePrice":489.78
        },
        {
         "companyName":"INFY",
         "sharePrice":1490.78
     },
     {
         "companyName":"WIPRO",
         "sharePrice":1856.78
     }
 
     ],
     [
        {
            "companyName":"HCL",
            "sharePrice":490.78
        },
        {
         "companyName":"INFY",
         "sharePrice":1890.78
     },
     {
         "companyName":"WIPRO",
         "sharePrice":900.78
     }
 
     ]

]

var count=1;
function getSharePrices(shares:any[][])
{
    
    shares.forEach(arr=>{
        console.log("Day:"+count);
        arr.sort((x,y)=>x.sharePrice< y.sharePrice ? 1 :0);
        arr.forEach(obj=>{
            console.log(obj.companyName,"==>",obj.sharePrice);
        })
        count=count+1;
    })
    
}

getSharePrices(sharesData);
