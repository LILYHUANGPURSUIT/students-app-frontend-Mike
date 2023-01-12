import React from 'react';
import StudentCard from '../studentCard/StudentCard';

function StudentList({ studentData }) {
    console.log("<StudentList /> rendered!")
  return (
    <div>
        {studentData.map(student => <StudentCard key={student.id} student={student} />)}
    </div>
  )
}

export default StudentList;