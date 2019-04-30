var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function computeLetterGrade(score) {
  if (score > 100 || score < 0) {
    return 'Invalid Score Value: Must be between 0 and 100 inclusive'; 
  }

  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F'; 
  } 
}

function computeWeightedGrade(examAverage, exerciseAverage) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;
  return Math.round((EXAM_WEIGHT * examAverage) + (EXERCISE_WEIGHT * exerciseAverage));
}

function sum(array) {
  return array.reduce(function (accum, value) {
    return accum + value; 
  });
}

function minimum(array) {
  return array.reduce(function (minimum, value) {
    return minimum > value ? value : minimum;
  }, Infinity);
}

function maximum(array) {
  return array.reduce(function (maximum, value) {
    return maximum < value ? value : maximum;
  }, -Infinity);
}

function average(array) {
  return sum(array) / array.length;
}

function computeFormattedGrade(student) {
  var examAverage = average(student.scores.exams);
  var exerciseTotal= sum(student.scores.exercises);
  var weightedGrade = computeWeightedGrade(examAverage, exerciseTotal); 
  var letterGrade = computeLetterGrade(weightedGrade);
  return `${weightedGrade} (${letterGrade})`;
} 

function computeExamStats(scores) {
  var exam_scores = {}
  var exam_summary = [] 

  for (student in scores) {
    scores[student].scores.exams.forEach (function (value, index) {
      if (exam_scores[index] === undefined) {
        exam_scores[index] = [value]; 
      } else {
        exam_scores[index].push(value);
      }
    }); 
  }

  for (i in exam_scores) {
    exam_summary.push(
      {
        average: average(exam_scores[i]), 
        minimum: minimum(exam_scores[i]),
        maximum: maximum(exam_scores[i]),
      } 
    ); 
  }
  return exam_summary;
}

function generateClassRecordSummary(scores) {
  var summary = {
    studentGrades: [],
    exams: [],
  };

  for (student in scores) { 
    summary['studentGrades'].push(computeFormattedGrade(scores[student]));  
  };

  summary['exams'] = computeExamStats(scores);

  return summary;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
