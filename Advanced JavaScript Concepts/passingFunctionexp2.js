function add(){
    console.log("Adding");
}
function substract()
{
    console.log("Substracting");
}
function doAdd()
{
    //it is repetstivr process for add 
    add();
}
function doSubstract()
{
    substract();
}
doAdd();
doSubstract();



function excute(operation)
{
    operation();
}
excute(add);
excute(substract);