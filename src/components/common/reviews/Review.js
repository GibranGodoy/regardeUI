import React from 'react'
import './review.scss'
import Rating from '@mui/material/Rating';
import { Avatar } from '@material-ui/core';

export default function Review(props) {
    return (
        <div className='review'>
            <Avatar alt={props.user.username} src={props.user.avatar} className='avatar'/>
            <div>
                <header>
                    <h6>{props.movie}</h6>
                    <Rating name='half-rating-read' value={props.rate/2} precision={ 0.5 } readOnly/>
                </header>
                <p className='caption'>{props.user.username}</p>
                <p className='body-1'>{ props.text }</p>
            </div>
        </div>
    )
}
