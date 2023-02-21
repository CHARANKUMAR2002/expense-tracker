import React, {}  from "react";
import './expense_item.css';
import '../expense_date/expense_date'
import ExpenseDate from "../expense_date/expense_date";

const ExpenseItem = (props) => {

   let {date, title, amount} = props;

    
  
    return(
        <div className="out">
        <div className="expense-item">
            <ExpenseDate date ={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
        </div>
    )
};

export default ExpenseItem

