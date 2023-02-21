import React from "react";
import ExpenseForm from "./expense_form/expense_form";
import './new_expense.css';

const NewExpense = () => {

    
    const onSave = (value) => 
    {
        const expense_data = {
            ...value,
            id: Math.random().toString()
        }
        console.log(expense_data);
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSave={onSave} />
        </div>
    );
}

export default NewExpense;