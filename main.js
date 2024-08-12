var screen = document.querySelector('#screen')
var btn = document.querySelectorAll('.btn-item')
var equalbtn =document.querySelector('#equal')
var sinbtn=document.querySelector('#sin')
var cosbtn=document.querySelector('#cos')
var clearbtn=document.querySelector('#clear')
var factbtn=document.querySelector('#fact')
var logbtn=document.querySelector('#log')
var tanbtn=document.querySelector('#tan')
var sqrtbtn=document.querySelector('#sqrt')
var powbtn=document.querySelector('#pow')

for(item of btn)
{
     item.addEventListener('click', (e)=>{
        btntext=e.target.innerText

        if(btntext=="x"){
         btntext="*"
        }else if(btntext=="π"){
         btntext=Math.PI
        }

        screen.value+=btntext
     })
}

equalbtn.addEventListener('click', (e)=>{
   screen.value=eval(screen.value)
})

sinbtn.addEventListener('click', (e)=>{
   screen.value=Math.sin(screen.value)
})

clearbtn.addEventListener('click', (e)=>{
   screen.value=""
})

cosbtn.addEventListener('click', (e)=>{
   screen.value=Math.cos(screen.value)
})

logbtn.addEventListener('click', (e)=>{
   screen.value=Math.log(screen.value)
})

tanbtn.addEventListener('click', (e)=>{
   screen.value=Math.tan(screen.value)
})

sqrtbtn.addEventListener('click', (e)=>{
   screen.value=Math.sqrt(screen.value)
})

powbtn.addEventListener('click', (e)=>{
   screen.value=Math.pow(screen.value,2)
})

factbtn.addEventListener('click', (e)=>{
   let ans=1
   for (let index = 1; index <= screen.value; index++) {
      ans=ans*index
   }
   screen.value=ans
})

