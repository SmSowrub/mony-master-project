
 function inputFieldValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue =parseInt(inputFieldString);
    // inputField.value ="";
    return inputValue;
}

document.getElementById('Calculate-Btn').addEventListener('click', function(){
    const TotalIncome = inputFieldValue('Income');
    if(isNaN(TotalIncome)){
        alert("Wrong input Value..!! Please enter Your Income... ")
    }
    else{

    }
    const FoodCost= inputFieldValue('Food');
    if(isNaN(FoodCost)){
        alert("Please enter a Food number")
    }
    const RantCost= inputFieldValue('Rant');
    if(isNaN(RantCost)){
        alert("Please enter Rant number")
    }
    const ClothesCost= inputFieldValue('Clothes');
    if(isNaN(ClothesCost)){
        alert("Please enter Clothes number")
    }
    const totalCost = FoodCost + RantCost + ClothesCost;

    if(totalCost > TotalIncome){
        alert("cat Your code according Your cloth")
    }
    const Balance =TotalIncome - totalCost;

   document.getElementById('TotalExpenses').innerText=totalCost;
    

    document.getElementById('Balance').innerText=Balance;

 })

 document.getElementById('CalculateSave-btn').addEventListener('click',function(){
   const input_Amount = inputFieldValue("Save");
   const TotalIncome = inputFieldValue('Income');
   const discount =TotalIncome * input_Amount/100;
   console.log(input_Amount);

  
   const Total_Expenses=document.getElementById('SavingAmount');
   Total_Expenses.innerText=discount;


    const Total_Balance=document.getElementById('Balance');
    const Total_Balance_String=Total_Balance.innerText;
    const Total_Balance_Amount = parseInt(Total_Balance_String);
    const Remaining = Total_Balance_Amount - discount;

   

    const Remaining_Balance =document.getElementById('RemainingBalance');
    Remaining_Balance.innerText =Remaining; 


 })