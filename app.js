let body=document.querySelector("body")
let divs=document.querySelectorAll(".outline")
divs.forEach(function(d){
  d.addEventListener("click",(e)=>{
    if(e.target.id=="pink"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=="plum"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=="palevioletred"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=="purple"){
      body.style.backgroundColor=e.target.id
    }
  })
})