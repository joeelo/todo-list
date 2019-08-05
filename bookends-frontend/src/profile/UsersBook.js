import React from 'react'
import { Link } from "react-router-dom"

const UsersBook = (props) => {
    const info = props.book.any
    return (
        <div>
            
            <Link to={`/book/${info.id}`} >
                <p>{info.volumeInfo.title} - {info.volumeInfo.subtitle}</p>
            </Link>
            
        </div>
    )
}

export default UsersBook;