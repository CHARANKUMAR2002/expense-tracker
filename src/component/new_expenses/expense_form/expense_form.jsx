import React, { useState } from "react";
import './expense_form.css';

const ExpenseForm = (props) =>
{

    const onExpenseSubmit = (event) =>
    {
        event.preventDefault();
        const new_Expense = {title: enteredTitle, amount: enteredAmount, date: enteredDate};
        props.onSave(new_Expense);
    }

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');
    const onTitleChange = (event) => setEnteredTitle(event.target.value);
    const onAmountChange = (event) => setEnteredAmount(event.target.value);
    const onDateChange = (event) => setEnteredDate(event.target.value);

    return(
    <form onSubmit={onExpenseSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" id="title" name="title" value={enteredTitle} onChange={onTitleChange}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0" id="amount" value={enteredAmount} onChange={onAmountChange} name='amount'/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2025-01-01" id="date" value={enteredDate} onChange={onDateChange} name='date' />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="cancel">Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}

export default ExpenseForm;