const termMap = { 
    F: 'Fall',
    W: 'Winter',
    S: 'Spring'
};
const terms = Object.values(termMap);

const getCourseTerm = course => termMap[course.id.charAt(0)];
const getCourseNumber = course => course.id.slice(1);


const daysPat = /M|Tu|W|Th|F/g;
const timesPat = /(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d)/;

const addTimes = (course) => {
  course.days = (!course.meets) ? [] : (
    Array.from(course.meets.matchAll(daysPat)).map(m => m[0])
  );

  const [match, hh1, mm1, hh2, mm2] = timesPat.exec(course.meets);
  if (match) {
    course.hours = {
      start: hh1 * 60 + mm1 * 1,
      end: hh2 * 60 + mm2 * 1
    }
  };
}


const daysOverlap = (days1, days2) => (
  days1 && days2 && days2.some(day => days1.includes(day))
);

const hoursOverlap = (hours1, hours2) => (
  hours1 && hours2 && Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end)
);

const timeConflict = (course1, course2) => (
  daysOverlap(course1.days, course2.days) && hoursOverlap(course1.hours, course2.hours)
);

const courseConflict = (course1, course2) => (
  course1 !== course2
  && getCourseTerm(course1) === getCourseTerm(course2)
  && timeConflict(course1, course2)
);

const hasConflict = (course, selected) => {
  if (!course.days) addTimes(course);
  return selected.some(selection => courseConflict(course, selection))
};

export { getCourseNumber, getCourseTerm, hasConflict, terms };