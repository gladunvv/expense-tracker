import React from 'react';

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-contol'>
          <label htmlFor='text'></label>
          <input type='text' id='text' placeholder='Enter text...' />
        </div>
        <div className='form-conrol'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' id='amount' placeholder='Enter amount...' />
        </div>
      </form>
    </>
  );
};
