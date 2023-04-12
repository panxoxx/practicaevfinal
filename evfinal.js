var contenido = document.querySelector("#contenido");
var contenido2 = document.querySelector("#contenido2");

fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos => {
        tabla(datos)
    });

function tabla(datos) {
    contenido.innerHTML = ""
    for (let temp of datos) {
        contenido.innerHTML += `
         <tr>
            <td>${temp.name}</td> 
            <td><img src="${temp.img}" width="50px"></td> 
            <td>${temp.level}</td> 
         </tr>        
         `
    }
}

var formulario = document.getElementById("boton");

formulario.addEventListener("click", (e) => {
 e.preventDefault()    
     var nombre = document.getElementById("inputdigimon").value;
     
    fetch('https://digimon-api.vercel.app/api/digimon/name/'+ nombre)         
     
               
          .then(response => response.json())
          .then(datos2 =>tabla2(datos2)) })
          

          function tabla2(datos2) {
             contenido.style.display= "none"
             contenido2.innerHTML = ""
             for (let temp of datos2) {
                 contenido2.innerHTML += `
                  <tr>
                    <td>${temp.name}</td> 
                     <td><img src="${temp.img}" width="50px"></td> 
                     <td>${temp.level}</td> 
                  </tr>        
                  `
             }
        }