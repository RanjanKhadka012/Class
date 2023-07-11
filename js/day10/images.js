
images=[a.png,b.png,c.png,birds.png]
let b_length = images.length()
let i = 0;
 const silderfunction=()=>{i++
     i = i%b_length
     document.querySelector("img").src = `./../media/${images[i]`
 }
    


// let set = setInterval(silderfunction,3000)

const Next=()=>{
     i++
    i = i%b_length
    document.querySelector("img").src = `./../media/${images[i]}`
}

const prev=()=>{
    i--
    if (i<0){
        i = b_length-1 
    }
    document.querySelector("img").src = `./../media/${images[i]}`
}