$(document).ready(function() {
    //set up form function and button
    $("button#StudentData").on("click", studentResults);
    $("button#sortByGrade").on("click", gradeSort);
    $("button#sortByName").on("click", nameSort);
});

function sortStudentByName(a, b)
    {
    if (a.lastName < b.lastName)
        return -1
    else if (a.lastName > b.lastName)
        return 1;
    else
        return 0;
    }

function sortStudentByGrade(a, b)
{
    if (a.pointsPercent < b.pointsPercent)
        return -1
    else if (a.pointsPercent > b.pointsPercent)
        return 1;
    else
        return 0;
}

let Students = [];

function nameSort(a, b)
    {
    Students.sort(sortStudentByName);
    clearAndPrint();
    }

function gradeSort(a, b)
{
    Students.sort(sortStudentByGrade);
    clearAndPrint();
}

function clearAndPrint() {
    // clear paragraph containing student grade
    $("p#results").empty();
    //    loop through student array
    for (let aStudent of Students)
    {
        let printStudents = `${aStudent.firstName} ${aStudent.lastName}
         received a grade of ${aStudent.pointsPercent}%.<br>`;
        $("p#results").append(printStudents);
    }
}


//  When the form is submitted, create an object that contains the data.
// event.preventDefault() since form is not submitting to Database, need data to stay on screen
function studentResults() {

    //Gather input
    //var sizeCharge = parseFloat($("select#size option:selected").data("price"));
    //let size = $("select#size option:selected").val();
    //calculate value of percent grade
    let pointsEarned = parseFloat($("input#pointsEarned").val());
    let pointsPossible = parseFloat($("input#pointsPossible").val());
    //calculate number grade to two decimal points
    let pointsPercent = ((pointsEarned / pointsPossible) * 100).toFixed(2);

    //set up object and fill it with properties of the student and their grade
    let studentInfo = {
        firstName: $("input#firstName").val(),
        lastName: $("input#lastName").val(),
        pointsPercent: pointsPercent
        //grade: letterGrade
    };

    //push student into into class array
    Students.push(studentInfo);
}

//-------------------------------------------------------------------


//determine letter grades based on number grade... if else:
// if (pointsPercent < 60) {
//     letterGrade = "F";
// } else if (pointsPercent < 70) {
//     letterGrade = "D";
// } else if (pointsPercent < 80) {
//     letterGrade = "C";
// } else if (pointsPercent <= 90) {
//     letterGrade = "B";
// } else {
//     letterGrade = "A"
// }



    /* use the object's properties to output the following:
       first name
       last name
       percentage <-- calculated from points earned / points possible
       letter grade <-- A, B, C, etc. based on percent */
    //console.log(propName);   <----prints list of all left side of colon in object format
    // 	console.log([propName]);  <----prints list of all right side of colon




