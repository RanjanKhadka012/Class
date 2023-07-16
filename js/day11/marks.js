let english = parseInt(prompt("Enter marks obtained in English"))
let math =  parseInt(prompt("Enter marks obtained in Math"))
let science =  parseInt(prompt("Enter marks obtained in Science"))

const Full_marks = 300
const total_marks = science + math + english

const pass_or_fail = (english, math, science) => {
    if (english <= 40) {
        // document.write(" you have failed a subject <br /> Grade is not accessible")
        return false

    } else if (math <= 40) {
        // document.write(" you have failed a subject <br /> Grade is not accessible")
        return false
    } else if (math <= 40) {
        // document.write(" you have failed a subject <br /> Grade is not accessible")
        return false
    } else {
        return true
        }
}

const Grade = (english,math,science)=>{
    if (pass_or_fail(english, math, science)!=true){
        document.write("You have failed")
    } else {
        if (total_marks > Full_marks * 0.4 && total_marks < Full_marks * 0.5) {
            document.write("C");
        } else if (total_marks >= Full_marks * 0.5 && total_marks < Full_marks * 0.6) {
            document.write("C+");
        } else if (total_marks >= Full_marks * 0.6 && total_marks < Full_marks * 0.7) {
            document.write("B");
        } else if (total_marks >= Full_marks * 0.7 && total_marks < Full_marks * 0.8) {
            document.write("B+");
        } else if (total_marks >= Full_marks * 0.8 && total_marks < Full_marks * 0.9) {
            document.write("A");
        } else if (total_marks >= Full_marks * 0.9) {
            document.write("A<sup>+</sup>");
        } else {
        document.write("You have failed");
        }
    }
}
document.write(`<h4>Marks Obtained = ${total_marks}</h4> <br />`)
document.write(`Percentage Obtained = ${(total_marks * 100/Full_marks)}%  <br />`)
Grade(english,math,science)






