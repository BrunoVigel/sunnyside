const botao = document.querySelector('.arrow')
const about = document.querySelector('#about')

botao.addEventListener('click', function () {
  window.scrollTo({
    top: about.offsetTop,
    behavior: 'smooth'
  })
})
