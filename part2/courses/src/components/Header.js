import React from 'react'
import Part from './Part'

const Header = ({course}) => {
   
    return (
        <div>
            <h2>{course.name}</h2>
            <Part parts = {course.parts}/>
        </div>
    )
}

export default Header