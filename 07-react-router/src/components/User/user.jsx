import React from 'react'
import { useParams } from 'react-router-dom'
function user() {
  const {userid} = useParams()
  return (
    <div className='bg-grey-700 text-3xl' >User: {userid}</div>
  )
}

export default user