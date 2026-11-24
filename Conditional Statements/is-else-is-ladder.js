let m1=40,m2=50,m3=60;
let avg=(m1+m2+m3)/3;
if(avg>=75)
    console.log("distinction");
else if(avg>=60 && avg<75)
    console.log("First Class");
else if(avg>=50 && avg<60)
    console.log("Second Class");
else if(avg>40 && avg <50)
    console.log("Third Class");
else
    console.log("Fail");