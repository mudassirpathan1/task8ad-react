
import React from "react";
import Expense from "./component/Expense.jsx";
import NewExpense from "./component/NewExpense/NewExpense.js";

import ExpenseForm from "./component/NewExpense/ExpenseForm.js";
function App(date,title,price) {
 
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
  
      <b><h1>Expenses Menu</h1></b>
      <Expense date={"july 2022"} title={"car insurance"} price={"$231"}/>
      <Expense date={"july 2023"} title={"phone insurance"} price={"$21"}/>
      <Expense date={"March 2023"} title={"Health insurance"} price={"$12"}/>

    </div>
  );
}



// const App= () => {
//   const Expenses=[
//     {
//       id:'e1',
//       title:'NewsPaper',
//       amount:10,
//       date: new Date(2023, 3, 16)
//     },
//     {
//       id:'e2',
//       title:'CarInsurance',
//       amount:100,
//       date: new Date(2023, 6, 26)
//     },
//     {
//       id:'e3',
//       title:'Health Insurance',
//       amount:50,
//       date: new Date(2023, 1, 21)
//     }
//   ];

   const addExpenseHandler= expense=>{
    console.log('In App.js');
    console.log(expense);
   };

//   return (
//     <div>
//       <NewExpense/>
//       <Expenses items={Expenses} />
//     </div>
//   );
// };

export default App;
