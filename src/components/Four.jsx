import React,{useContext} from 'react'
import { GlobalContext } from './context/GlobalContext'

const Four = () => {
  const {greet} = useContext(GlobalContext)
  return (
    <div>{greet}</div>
  )
}

export default Four