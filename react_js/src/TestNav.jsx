import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return (
    <>
        <ul className='d-flex bg-secondary justify-content-around'>
            <li>
                <Link to='/'>  Home  </Link>
            </li>

            <li>
                <Link to='/Test1'>  Test1  </Link>
            </li>

            <li>
                <Link to='/Show'> Show </Link>
            </li>
        </ul>
    </>
  )
}

export default TestNav
