

// animar todos os itens da tela que tiverem o atributo data-anime
const item = document.querySelectorAll('[data-anime]')

const animeScroll= () =>{
// identificar em que posição do topo o elemento está + altura da janela  *  0.85 
  const windowTop = Math.round(window.scrollY) + window.innerHeight * 0.86

  item.forEach( element => {
    const alturaDoElementoDoTop = element.offsetTop
    if(windowTop > alturaDoElementoDoTop){
      element.classList.add('animate');
    } else {
      element.classList.remove('animate')
    }
  
  });
  
};

animeScroll()

window.addEventListener('scroll', () => {
  animeScroll()
});


// efeito maquina de escrever
const nameJob = document.querySelector("#enterprise")

const typeWriter = (element) => {
  const textArray = element.innerHTML.split('')

  element.innerHTML = ''

  textArray.forEach((letter, index) => {
    setTimeout(() => {
      element.innerHTML += letter
    }, 100 * index)
    
  })
}



typeWriter(nameJob)

setTimeout( () => {
  nameJob.style.visibility='visible'
  nameJob.style.opacity = '1'
  typeWriter(nameJob)
}, 0)



// menu responsivo 

const menuHamburguer = document.querySelector('.container-header .menu-toggle')
const nav = document.querySelector('.container-header nav')

menuHamburguer.addEventListener('click' , () => {

  menuHamburguer.classList.toggle('on')
  nav.classList.toggle('on')

})


// deixar marcado o link no header

const links = document.querySelectorAll('.container-header ul li a')

links.forEach( link => link.addEventListener('click', ()=>{
   
   for(let i = 0; i < links.length ; i++){
     links[i].classList.remove('active')
   } 
  link.classList.toggle('active')

}))


links.forEach( link => link.addEventListener('click', () => {
      menuHamburguer.classList.toggle('on')
      nav.classList.toggle('on')

}))