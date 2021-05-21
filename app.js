const calculateBudget=document.getElementById('calc');
const budgetValue=document.getElementById('input-budget');
const budgetELem=document.getElementById('budgetCost');
const leftBudget=document.getElementById('leftAmount');
const expenseName=document.getElementById('expense-name');
const expenseAmt=document.getElementById('expense-amt');
const addExpense=document.getElementById('addExpense');
const addTag=document.getElementById('expense-values');
const exp=document.getElementById('exp');
let budget=0;
let expense=0;
let balance=0;

calculateBudget.addEventListener('click',getBudgetValue);
addExpense.addEventListener('click',updateExpenseList);
function getBudgetValue(){
    budget=budgetValue.value;
    if(budget==''){
        alert("Please Fill Value First");
        return;
    }
    budgetELem.innerHTML=budget;
    balance=budget-expense;
    updateAmount();
}

function updateAmount(){
    exp.innerHTML=expense;
    leftBudget.innerHTML=balance;
}

function updateExpenseList(){
    let expName=expenseName.value;
    let temp=expenseAmt.value;
    let expenseValue=eval(temp);
    if(expName==''||expenseValue==''||temp==''){
        alert('Please Input the Value');
        return;
    }
    expense=expense+expenseValue;
    balance=balance-expenseValue;
   
    let divTag=document.createElement('div');
    divTag.classList.add('expense-details');
    let spanName=document.createElement('span');
    let spanValue=document.createElement('span');
    spanName.innerHTML=expName;
    spanValue.innerHTML=expenseValue+' $';
    divTag.appendChild(spanName);
    divTag.appendChild(spanValue);
    addTag.appendChild(divTag);
    updateAmount();
}

