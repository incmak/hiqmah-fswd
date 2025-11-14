import { useReducer } from 'react';

const initialState = {
  count: 0,
  date: new Date(),
  step: 1,
};
function reducer(state, action) {
  switch (action.type) {
    case 'DECREMENT': {
      const prevDate = new Date(state.date);
      prevDate.setDate(prevDate.getDate() - state.step);
      return { ...state, date: prevDate, count: state.count - state.step };
    }
    case 'INCREMENT': {
      const nextDate = new Date(state.date);
      nextDate.setDate(nextDate.getDate() + state.step);
      return { ...state, date: nextDate, count: state.count + state.step };
    }
    case 'SET_STEP': {
      return { ...state, step: action.payload };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
}

export default function DateCounterReducer() {
  // Step 1.1: import Reducer
  // Step 1.2: Destructure state and dispatch
  //Step 1.3: Pass arguments in useReducer (reducer function(callback), initial state(object))
  // Step 2.1: Define initial state object {count: 20, step: 1, .....}
  // Step 2.2: Define reducer function (state and action as params)
  // step 3.1: Dispatch action (using dispatch function)
  // Step 3.2: Define actions

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='flex justify-center items-center flex-col'>
      <h3 className='mb-4 font-medium'>Date Increment / Decrement</h3>
      <p>Current Date: {state.date.toDateString()}</p>
      <p>Current Count: {state.count}</p>
      <p>
        <label>
          Step (days):
          <input
            type='number'
            className='w-20'
            value={state.step}
            onChange={(e) =>
              dispatch({ type: 'SET_STEP', payload: Number(e.target.value) })
            }
          />
        </label>
      </p>
      <div className='flex gap-3 items-center mt-4'>
        <button
          onClick={() =>
            dispatch({
              type: 'DECREMENT',
            })
          }
          className='border-r pr-4'
        >
          Previous Day
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'INCREMENT',
            })
          }
          className='border-r pr-4'
        >
          Next Day
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
}
