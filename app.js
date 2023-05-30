function calculateGrade() {
    var name = document.getElementById("name").value;
    var grade = document.getElementById("grade").value;

    var resultDiv = document.getElementById("result");

    if (grade >= 50) {
        resultDiv.textContent = "Congratulations, " + name;
        gradeImage.src= "images/1.png";
    } else {
        resultDiv.textContent = "sorry, " + name;
        gradeImage.src= "images/2.jpg";
    }
}