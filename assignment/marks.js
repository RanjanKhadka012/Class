function clicked(){
    let first= document.getElementById('F_name')
    const First_name = first.value

    let Last= document.getElementById('L_name')
    const Last_name= Last.value
    let English_value = document.getElementById("English")
    let Math_value = document.getElementById("Maths")
    let Science_value= document.getElementById("Science")
    Math_marks=parseInt(Math_value.value)
    English_marks = parseInt(English_value.value)
    Science_marks = parseInt(Science_value.value)

    const total_marks = Math_marks+Science_marks+Science_marks
    document.querySelector('.name').innerHTML= `<h2> ${First_name} ${Last_name} </h2>`

    document.querySelector('.marks').innerHTML= `<h2>Total marks obtained = ${total_marks} </h2>`

    let percentage = (total_marks/3)
    document.querySelector('.percent').innerHTML= `<h2> Percent = ${percentage.toFixed(2)}%</h2>`

    const pass_or_fail = (english, math, science) => {
    if (english <= 40) {
        return false
    } else if (math <= 40) {
        return false
    } else if (science <= 40) {
        return false
    } else {
        return true
        }
}
    const Full_marks=300

    // 
    const Grade = (english,math,science)=>{
    if (pass_or_fail(english, math, science)!=true){
        return("You have failed")
    } else {
        if (total_marks > Full_marks * 0.4 && total_marks < Full_marks * 0.5) {
            return("C");
        } else if (total_marks >= Full_marks * 0.5 && total_marks < Full_marks * 0.6) {
            return("C+");
        } else if (total_marks >= Full_marks * 0.6 && total_marks < Full_marks * 0.7) {
            return("B");
        } else if (total_marks >= Full_marks * 0.7 && total_marks < Full_marks * 0.8) {
            return("B+");
        } else if (total_marks >= Full_marks * 0.8 && total_marks < Full_marks * 0.9) {
            return("A");
        } else if (total_marks >= Full_marks * 0.9) {
            return("A<sup>+</sup>");
        } else {
        return("You have failed");
        }
    }
    }

    let grade = Grade(English_marks,Math_marks,Science_marks)
    document.querySelector('.grade').innerHTML= `<h2>Grade = ${grade} </h2>`
} 

function Reset(){
    location.reload()
}
