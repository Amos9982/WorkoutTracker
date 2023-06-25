import {WorkoutsContext} from '../context/WorkoutContext';
import { useContext } from 'react';

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  // Assure context is within componenet tree, else throw error
  if (!context) {
    throw Error('useWorkoutsContext must be inside an WorkoutsContextProvider');
  }

  return context;
}