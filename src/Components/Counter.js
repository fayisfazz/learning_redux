import {useSelector,useDispatch} from 'react-redux'
import { increase_count,decrease_count } from '../Redux/count/countSlice';
function Counter() {
  const count = useSelector(state => state.count.value)
  const dispatch = useDispatch()
  
  const increase=()=>{
    dispatch(
      increase_count()
    )
  }
  const decrease=()=>{
    dispatch(
      decrease_count()
    )
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={decrease}>Increase</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
