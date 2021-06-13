import React from 'react'
import Part from './Part'

const Course = ({course}) => {
    
    return (
        <div>
            <h1>{course.name}</h1>
            <Part parts = {course.parts}/>
        </div>
    )
}

export default Course