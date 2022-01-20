$('#btnSend').click(function () {
    // Pulls the values from the html form for each of the grade types
    var assingments = parseInt($('#assignments').val(), 10);
    var gp = parseInt($('#groupProject').val(), 10);
    var quizzes = parseInt($('#quizzes').val(), 10);
    var exams = parseInt($('#exams').val(), 10);
    var intex = parseInt($('#intex').val(), 10);

    // Calculates the final grade based on syllabus weights and creates a string for the alert to be used later
    var final_grade = (assingments * .55) + (gp * .05) + (quizzes * .1) + (exams * .2) + (intex * .1);
    var final_grade_string = final_grade.toString();

    // Calculates the letter graded based on the weighted final grade
    if (final_grade >= 93) {
        var letter_grade = 'A'
    } else if (final_grade >= 90) {
        var letter_grade = 'A-'
    } else if (final_grade >= 87) {
        var letter_grade = 'B+'
    } else if (final_grade >= 83) {
        var letter_grade = 'B'
    } else if (final_grade >= 80) {
        var letter_grade = 'B-'
    } else if (final_grade >= 77) {
        var letter_grade = 'C+'
    } else if (final_grade >= 73) {
        var letter_grade = 'C'
    } else if (final_grade >= 70) {
        var letter_grade = 'C-'
    } else if (final_grade >= 67) {
        var letter_grade = 'D+'
    } else if (final_grade >= 63) {
        var letter_grade = 'D'
    } else if (final_grade >= 60) {
        var letter_grade = 'D-'
    } else {
        var letter_grade = 'E'
    }
         
    // Sends the final grade calculations to the user via Alert
    alert(final_grade_string + '% Letter Grade: ' + letter_grade);
})


