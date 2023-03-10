import React from 'react';
import "./StudentCard.css"
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

function StudentCard( { expanded, onClick, student }) {
  const { email, company, firstName, lastName, pic, skill, grades, id } = student;
  const average = (grades.reduce((a,b) => Number(a)+Number(b), 0)/grades.length).toFixed(2);

  return (
    <div className="studentCard" key={id}>
        <div className="studentCard__avatar">
          <img src={pic} alt={`${firstName} ${lastName}`}/>
        </div>

        <div className="studentCard__info">
          <h1>
            {firstName} {lastName}
          </h1>
          <ul> 
              <li>Email: {email}</li>
              <li>Company: {company}</li>
              <li>Skill: {skill}</li>
              <li>Average: {average}</li>
          </ul>
          { expanded && (
            <div className='studentCard__grades'>
              <ul>
                {grades.map((grade, index) => (
                  <li key={`${grade}-${index}`}>
                    <span>Test {index + 1}: </span><span>{grade}%</span>
                  </li>
                ))}
              </ul>
            </div>
            )
          }
        </div>
        <div className='studentCard__controls'>
          <button onClick={onClick}>
            {expanded ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
    </div>
            
  )
}

export default StudentCard