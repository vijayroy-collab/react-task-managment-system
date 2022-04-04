import React from 'react'
import PrivateRoute from '../../Components/PrivateRoute'

const Index = () => {
  return (
    <PrivateRoute>
    <div>Dashboard</div>
    </PrivateRoute>
  )
}

export default Index