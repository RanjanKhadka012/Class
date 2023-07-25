const displayMsg=(msg,id,color)=>{
    document.getElementById(id).innerHTML= msg
    document.getElementById(id).style.color=color
}


const fnameValidation = ()=>{
    const fname = document.getElementById('fname').value
    if(fname==""){
        displayMsg('first name is mandatory','fnameMsg','red')
        return false}

    else if(!fname.match(/^([A-Za-z])+$/)) {
        displayMsg('invalid  name','fnameMsg','red')
        return false
    }
     else if(fname.length<3) {
        displayMsg("first name should be more than 3 letters ","fnameMsg",'red')
        return false

    } else {
        displayMsg('Valid name','fnameMsg','green')

    }

}

const lnameValidation = ()=>{
    const lastname= document.getElementById('lname').value
     if (lastname==""){
        displayMsg('Last name is mandatory','lnameMsg','red')
        return false
     }
    else if(!fname.match(/^([A-Za-z])+$/)) {
        displayMsg('invalid  last name','lnameMsg','red')
        return false

    } else if(lastname.length<2) {
        displayMsg("Last name should be atleast 2 letters ","lnameMsg",'red')
        return false
    
    } else {
        displayMsg('Valid name','lnameMsg','green')

    }
}



const emailValidation = ()=>{
    const email= document.getElementById('Email').value
     if(email==""){
        displayMsg('Email is mandatory','EmailMsg','red')
        return false
     }

    else if(!email.match(/^([a-z0-9])[a-z0-9\.\-_]+\@([a-z])+\.([a-z])+$/)) {
        displayMsg('invalid  Email','EmailMsg','red')
        return false
    
    } else if(email.length<=3) {
        displayMsg("Email should be more than 3 letters ","EmailMsg",'red')
        return false
    
    } else {
        displayMsg('Valid mail','EmailMsg','green')

    }
    
}

const passwordValidation = ()=>{
    const password= document.getElementById('password').value
     if(password==""){
        displayMsg('password  is mandatory','passwordMsg','red')
    }
     else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$*#_!]).{8,100}$/)) {
        displayMsg(`invalid  Password <br /> Password should be atleast * characters <br /> password must contain a special character `,'passwordMsg','red')
        return false
    
    } else {
        displayMsg('Valid Password','passwordMsg','green')

    }
}
const cpasswordValidation = ()=>{
    const cpassword= document.getElementById('password').value
    const psw = document.getElementById('cpsw').value
     if(cpassword==""){
        displayMsg('Password confirmation  is mandatory','cpasswordMsg','red')
    }
    else if (cpassword!==psw){
        displayMsg('Invalid','cpasswordMsg','red')
    } else {
        displayMsg('Valid Password','cpasswordMsg','green')
    }
}

function validform(){
    if (fnameValidation()&& lnameValidation() && emailValidation() && passwordValidation() && cpasswordValidation()){
        return true
    }
    else{
        return false
    }
}