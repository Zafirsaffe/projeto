function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // todo esse código ai em baixo pode ser resumido nesse toggle

  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else {
  //html.classList.add('light')

  // se tiver sem ligth mode, manter immg normal

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a immagem
  if (html.classList.contains("light")) {
    // se tiver light mode adcionar img ligth
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se tiver sem ligth mode, manter immg normal
    img.setAttribute("src", "./assets/avatar-light.png")
  }

 
 if (html.classList.contains("light")) {
  
   img.setAttribute("alt", "foto da logo da empresa metal norte, uma rosa dos ventos dourada com fundo branco")
 } else {
  
  img.setAttribute( "alt", "foto da logo da empresa metal norte, uma rosa dos ventos preta com fundo branco"
   )
 }







}
