import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm=(props)=>{
 const [enteredTitle, setEnteredTitle]=useState('');  // this use for single states

 const [enteredAmount, setEnteredAmount]=useState('');

  const [enteredDate, setEnteredDate]=useState('');



//const [userInput, setuserInput]=useState({          // this use for multiple states  
    //enteredTitle:'',
   // enteredAmount:'',
   // enteredDate:''
//});



const titleChangeHandler=(event)=>{

    setEnteredTitle(event.target.value);

    //setuserInput({
      //  ...userInput,                           // ...setuserInput this is use for the avoid the other states to delete spread operator is saved the other states 
      //  enteredTitle:event.target.value
    
    //})
};
// setuserInput((prevState) =>{ 

// return {...prevState,enteredTitle: event.target.value}   // this is the concept of previous states 

//});


const amountChangeHandler= event=>{

    setEnteredAmount(event.target.value);

    // setuserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
};

const dateChangeHandler= event=>{

    setEnteredDate(event.target.value);

    // setuserInput({
    //     ...userInput,
    //     enteredDate:event.target.value 
    // })
};

  const submitHandler=(event)=>{
    event.preventDefault();

    const expenseData={
     
        title: enteredTitle,
        Amount:enteredAmount,
        date: new Date(enteredDate)
    };

  props.onSaveExpenseData(expenseData);
   setEnteredTitle('');
   setEnteredAmount('');
   setEnteredDate('');
    
  };

    return <form onSubmit={submitHandler}>

<div className="new-expense__controls">

<div className="new-expense__control">

<label>Title</label>

<input type="text" value ={enteredTitle} onChange={titleChangeHandler}/>
</div>

<div className="new-expense__control">

<label>Amount</label>

<input type="number" min="0.01" step="0.01" value ={enteredAmount}  onChange={amountChangeHandler} />
</div>

<div className="new-expense__control">

<label>Date</label>

<input type="date" min="2023-01-01"  max="2023-12-31" value ={enteredDate} onChange={dateChangeHandler}/>
</div>
</div>

<div className="new-expense__actions">

    <button type="submit" >Add Expenses</button>
</div>
    </form>
}

export default ExpenseForm;