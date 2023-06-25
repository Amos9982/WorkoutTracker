import {useWorkoutsContext} from '../hooks/useWorkoutsContext';

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutsContext();


  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })

    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  // const handleUpdateClick = async () => {
  //   const response = await fetch('/api/workouts/' + workout._id, {
  //     method: 'UPDATE'
  //   })

  //   const json = await response.json();

  //   if (response.ok) {
  //     dispatch({type: 'UPDATE_WORKOUT', payload: json})
  //   }
  // }
  
  return (    
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
      {/* <button onClick={handleClick}>Delete</button> */}
      {/* <button onClick={handleUpdateClick}>Delete</button> */}
    </div>
  )
}

export default WorkoutDetails;