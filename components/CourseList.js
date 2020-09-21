import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';


const termMap = { 
    F: 'Fall',
    W: 'Winter',
    S: 'Spring'
};
const terms = Object.values(termMap);

const getCourseTerm = course => termMap[course.id.charAt(0)];


const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));    
    
    return (
        <ScrollView>
            <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>                        
            <CourseSelector courses={termCourses} />            
        </ScrollView>        
  );
}


  export default CourseList;