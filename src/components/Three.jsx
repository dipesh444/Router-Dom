import React, { useContext } from 'react'
import Four from './Four'
import { GlobalContext } from './context/GlobalContext'

const Three = () => {
  const {third} = useContext(GlobalContext)
  return (
    <div>
      {third}
      <Four/>
      </div>
  )
}

export default Three