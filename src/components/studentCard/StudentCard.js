import React from 'react'

function StudentCard( { student }) {
    const { email, company, firstName, lastName, pic, skill, grades, id } = student;
    const average = (grades.reduce((a,b) => Number(a)+Number(b), 0)/grades.length).toFixed(2);
  return (
    <div key={id}>
        <img src={pic} alt={`${firstName} ${lastName}`}/>
        <h1>{`${firstName} ${lastName}`}</h1>
        <ul>
            <li>Email: {email}</li>
            <li>Company: {company}</li>
            <li>Skill: {skill}</li>
            <li>Average: {average}</li>
        </ul>
    </div>
            
  )
}

export default StudentCard