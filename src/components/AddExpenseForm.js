import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const { dispatch } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    
   };


  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            value={name}
            type="text"
            className="form-control"
            id="name"
            required="required"
            placeholder="Enter Item name"
            onChange={(event) =>setName(event.target.value)}
          ></input>
          <div className="col-sm">
            <label for="cost">Cost</label>
            <input
              value={cost}
              type="text"
              required="required"
              className="form-control"
              id="cost"
              placeholder="Enter cost of item"
              onChange={(event)=>setCost(event.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary mt-3">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
