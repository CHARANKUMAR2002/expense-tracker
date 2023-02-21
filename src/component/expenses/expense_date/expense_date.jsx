import React from "react";
import './expense_date.css';
const ExpenseDate = (props) =>
{
    const {date} = props;
    const d = date.getDate();
    const year = date.getFullYear();
    const m = date.toLocaleDateString('en-US', {month: 'long'});

    return(
            <div className='expense-date'>
                <div className="expense-date__month">{m}</div>
                <div className="expense-date__day">{d}</div>
                <div className="expense-date__year">{year}</div>
            </div>
    );
}

export default ExpenseDate;