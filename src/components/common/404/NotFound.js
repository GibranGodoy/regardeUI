import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.scss'

const NotFound = () => {
    return (
        <div className='Page404'>
            <h1>404</h1>
            <p className='body-1'>Page not found</p>
            <Link to='/' className='body-1'>Regresar a inicio</Link>
        </div>
    )
}

export default NotFound;
