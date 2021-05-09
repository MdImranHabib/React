import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Imran',
            age: 25,
            skill: '.Net'
        },
        {
            id: 2,
            name: 'Habib',
            age: 25,
            skill: '.Net'
        },
        {
            id: 3,
            name: 'Nayan',
            age: 25,
            skill: 'React'
        }
    ]

    const personList = persons.map(person => <Person person={person} />)

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
