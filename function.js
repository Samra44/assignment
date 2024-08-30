function getGrade(marks) {
    if (marks > 80){
        return "Grade A+";
    }else if (marks > 75){
        return "Grade A";
    }else if (marks >= 60 && marks <= 75){
        return "Grade B";
    }else if (marks >= 45 && marks < 60){
        return "Grade C";
    }else  {
        return "Grade D";
    }
}
const studentmarks = 81;
const grade = getGrade(studentmarks);
console.log (grade);


