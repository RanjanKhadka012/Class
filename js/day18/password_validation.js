const  passInput = document.querySelector(".pass-field input")
const eyeIcon=document.querySelector('.pass-field i')
const reqList = document.querySelector('.requirement-list li')


const requirements = [
    {regex: /.{8,}/,index:0},
    {regex: /[0-9]/,index:1},
    {regex: /[a-z]/,index:2},
    {regex: /[A-Z]/,index:3},
    {regex: /[\@\#\$\*\_]/,index:4}
]

passInput.addEventListener('click',(e)=>{

})
eyeIcon.addEventListener('click', ()=>{
    passInput.type=(passInput.type==='password' ? 
    'text':'password');

    eyeIcon.className = `fa-solid fa-eye${passInput.type === 'text'? '-slash':''}`
})

