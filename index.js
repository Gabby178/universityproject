const togglebutton=document.getElementsByClassName('togglebtn')[0]
const navbars=document.getElementsByClassName('navbarlinks')[0]

togglebutton.addEventListener('click', () =>{
  navbars.classList.toggle('active')
})