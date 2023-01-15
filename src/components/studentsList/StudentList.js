import React from 'react';
import StudentCard from '../studentCard/StudentCard';
import "./StudentList.css"

function StudentList({ studentData }) {
    console.log("<StudentList /> rendered!")
  return (
    <div className='studentList'>
        {studentData.map(student => <StudentCard key={student.id} student={student} />)}
    </div>
  )
}

export default StudentList;