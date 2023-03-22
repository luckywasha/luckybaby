
const button = document.getElementById("btn1");
button.addEventListener("click",calculateGrade);



function calculateGrade(){
    const marks = document.getElementById ("gradeid").value;

    if (marks>=0 && marks<20) {
        grade = "E"
    }
    else if (marks>=20 && marks<=40){
        grade = "D"
    }
    else if (marks>40 && marks<=70){
        grade = "B"
    }
    else if (marks>70 && marks <=100){
        grade = "A"
    }
    else {
        grade = "Not applicable"
    }

document.getElementById("output1").innerHTML=grade;

}