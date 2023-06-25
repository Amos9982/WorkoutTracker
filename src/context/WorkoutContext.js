import {createContext, useReducer} from 'react';

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload // payload will list out workouts in the array
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts] // payload will list out the created workout, then adding the state which is the array of split workouts
      }
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id)
      }
    // case 'UPDATE_WORKOUT':
    //   return {
    //     workouts: action.payload
    //   }
    default:
      return state;
  }
}

export const WorkoutsContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  });

  return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
      {children} 
    </WorkoutsContext.Provider>
  );
}