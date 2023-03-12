import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'


const ButtonRedux = () => {

    const ammount = useSelector(state => state);

    const dispatch = useDispatch()

    const incButtonHandler = ()=>{
        dispatch({
            type:'INC_HANDLER',
            payload:1,
        })
    }

    const decButtonHandler = ()=>{
        dispatch({
            type:'DEC_HANDLER',
            payload:1
        })
    }

  return (
    <div>
      <Navbar />

      <button className='btn btn-primary' onClick={incButtonHandler}>Increment</button>
      <span style={{paddingInline:'20px'}}>{ammount.ammount1}</span>
      <button className='btn btn-primary' onClick={decButtonHandler}>Decrement</button>
    </div>
  )
}

export default ButtonRedux
