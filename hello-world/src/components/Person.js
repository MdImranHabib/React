import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>I am {person.name}. I am {person.age} years old and I am a {person.skill} expert</h1>
        </div>
    )
}

export default Person
