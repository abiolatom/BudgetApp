import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-EXPENSES':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE-EXPENSE':
            return {
                
                ...state,
                expenses: state.expenses.filter(expenses => expenses.id !== action.payload),
            };
        default:
            return state;
    }
};

const initialState = {
  budget: 5000,
  expenses: [
    { id: 12, name: "shopping", cost: 47 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children} 
    </AppContext.Provider>
  );
};
