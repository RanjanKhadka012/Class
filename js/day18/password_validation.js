const  passInput = document.querySelector(".pass-field input")
const eyeIcon=document.querySelector('.pass-field i')
const requirementList = document.querySelectorAll('.requirement-list li')


const requirements = [
    {regex: /.{8,}/,index:0},
    {regex: /[0-9]/,index:1},
    {regex: /[a-z]/,index:2},
    {regex: /[A-Z]/,index:3},
    {regex: /[\@\#\$\*\_]/,index:4}
]

passInput.addEventListener('keyup',(e)=>{

    //check if the passwor dmatches requirements
    requirements.forEach(item=>{
        const isValid = item.regex.test(e.target.value)
        const requirementItem = requirementList[item.index]

        //updating class and icon of requirement item if requirement matched or not
        if (isValid){
            requirementItem.classList.add("valid")
            requirementItem.firstElementChild.className="fa-solid fa-check"
        } else {
            requirementItem.classList.remove('valid')
            requirementItem.firstElementChild.className = 'fa-soild fa-circle'
        }
    })
})

// to show and hide pass 

eyeIcon.addEventListener('click', ()=>{
    passInput.type=(passInput.type==='password' ? 
    'text':'password');

    eyeIcon.className = `fa-solid fa-eye${passInput.type === 'text'? '-slash':''}`
})


