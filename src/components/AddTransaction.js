import React from 'react';

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-contol'>
          <label htmlFor='text'></label>
          <input type='text' placeholder='Enter text...' />
        </div>
        <div className='form-conrol'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
