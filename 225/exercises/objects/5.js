function createStudent (name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function () {
      console.log(`${this.name} is a ${this.year} year student`); 
    },
    addCourse: function (course) {
      this.courses.push(course); 
    },
    listCourses: function () {
      return this.courses; 
    },
    addNote: function (code, note) {
      this.courses.forEach(function (course) {
        if (course['code'] === code) {
          if (course['note'] === undefined) {
            course['note'] = note; 
          } else {
            course['note'] += '; ' + note; 
          }
        } 
      }); 
    },
    updateNote: function (code, note) {
      this.courses.forEach(function (course) {
        if (course['code'] === code) {
          course['note'] = note; 
        } 
      }); 
    },
    viewNotes: function () {
      this.courses.forEach(function (course) {
        if (course['note'] !== undefined) {
          console.log(`${course['name']}: ${course['note']}`); 
        } 
      }); 
    }
  };
}

var school = {
  students: [],
  addStudent: function(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      return 'Invalid Year'; 
    }
    var newStudent = createStudent(name, year); 
    this.students.push(newStudent);
    return newStudent;
  },
  enrollStudent: function (name, course) {
    this.students.forEach(function (student) {
      if (student.name === name) {
        student.addCourse(course); 
      } 
    }); 
  },
  addGrade: function (name, courseName, grade) {
    this.students.forEach(function (student) {
      if (student.name === name) {
        student.courses.forEach(function (course) {
          if (course.name === courseName) {
            course.grade = grade; 
          }  
        });
      } 
    });
  },
  getReportCard: function (name) {
    this.students.forEach(function (student) {
      if (student.name === name) {
        student.courses.forEach(function (course) {
          if (course.grade !== undefined) {
            console.log(`${course.name}: ${course.grade}`);
          } else {
            console.log(`${course.name}: In progress`);
          }
        });
      } 
    });    
  },
  courseReport: function (name) {
    var grades = [];
    this.students.forEach(function (student) {
      student.courses.forEach(function (course) {
        if (course.name === name && course.grade !== undefined) {
          console.log(`${student.name}: ${course.grade}`); 
          grades.push(course.grade);
        } 
      });
    });    

    if (grades.length === 0) {
      return; 
    }

    console.log(`=${name} Grades=`); 
    console.log('---')
    var average = (grades.reduce((a, b) => a + b) / grades.length).toFixed(); 
    console.log(`Course Average: ${average}`);
  },
}

school.addStudent('foo', '3rd');
school.enrollStudent('foo', { name: 'Math', code: 101});
school.enrollStudent('foo', { name: 'Advanced Math', code: 102});
school.enrollStudent('foo', { name: 'Physics', code: 202});
school.addGrade('foo', 'Math', 95);
school.addGrade('foo', 'Advanced Math', 90);
school.getReportCard('foo');

school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101,});
school.addGrade('bar', 'Math', 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', { name: 'Math', code: 101,});
school.enrollStudent('qux', { name: 'Advanced Math', code: 102,});
school.addGrade('qux', 'Math', 92);
school.addGrade('qux', 'Advanced Math', 90);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
