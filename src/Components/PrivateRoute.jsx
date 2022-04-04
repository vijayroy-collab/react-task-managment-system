import React from 'react'
import {useNavigate} from 'react-router-dom'

const PrivateRoute=({children})=> {

    const navigate = useNavigate()

    React.useEffect(()=>{
        if(!localStorage.getItem("userData")){
            navigate('/login')
        }
    })

  return (
    <div>{children}</div>
  )
}

export default PrivateRoute